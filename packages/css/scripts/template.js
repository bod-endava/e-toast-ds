const { resolve, basename, dirname, access } = require('path');
const { readdir, readFile, mkdir, writeFile } = require('fs').promises;
const { readFileSync } = require("fs")

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const replaceTemplate = (symbolTable) => (code) => {
    return code.replace(/%[a-zA-Z0-9_]*%/gm,(symbol) => symbolTable[symbol.replace(/%/g,"")])
}

const isNotLineComment = x => !x.startsWith("#");

const loadSymbols = (symbolPath) => {
    const file = readFileSync(symbolPath,{ encoding: "utf8"});
    return file
    .toString("utf8")
    .split("\n")
    .filter(isNotLineComment)
    .map(x => x.split(":").map(x => x.trim() ))
    .reduce((acc,[key,value]) => ({ ...acc , [key] : value })  ,{})
}

const ensureDir = async d => {
  try {
    await access(d)
  } catch {
    await mkdir(d, { recursive: true })
  }
}

const template = ({
    symbols,
    input,
    output,
    debug
}) => {
    const srcPath = resolve(input)
    const outPath = resolve(output)
    const interpolate = replaceTemplate(loadSymbols(symbols))
    const replaceDestination = file => file.replace(srcPath,outPath)
    return {
        run: async (onEnd = () => {}) => {
            const files = getFiles(input);
            for await (const file of files){
              if( debug ){
                console.log("Interpolating: ", basename(file))
              }
              const rawData = await readFile(file)
              const data = interpolate(rawData.toString())
              const target = replaceDestination(file);
              await ensureDir(dirname(target));
              await writeFile(target,data);
            }
            onEnd()
        }
    }
}

module.exports = template