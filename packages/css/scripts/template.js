const { resolve, dirname, access } = require('path');
const { readdir, readFile, mkdir, writeFile } = require('fs').promises;
const { readFileSync } = require("fs")

const last = arr => arr[arr.length - 1];

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

const replaceTemplate = (symbolTable,debug=false) => (code) => {
  return code.replace(/%[a-zA-Z0-9_]*%/gm,(symbol) => {
    if(debug){
      const s = symbolTable[symbol.replace(/%/g,"")] || symbol
      console.log(`Replacing ${symbol} => ${s}`)
    }
    return symbolTable[symbol.replace(/%/g,"")] || symbol
  })
}

const isNotLineComment = x => !x.startsWith("#");

const loadSymbols = (symbolPath) => {
    const file = readFileSync(symbolPath,{ encoding: "utf8"});
    return file
    .toString("utf8")
    .split("\n")
    .filter(isNotLineComment)
    .map(x => x.split(":").map(x => x.trim() ))
    .reduce((acc,[key,value]) => ({ ...acc , [key] : value }),{})
}

const guaranteeDir = async d => {
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
    const interpolate = replaceTemplate(loadSymbols(symbols),debug)
    const replaceDestination = file => file.replace(srcPath,outPath)
    return {
        run: async (onEnd = () => {}) => {
            const files = getFiles(input);
            for await (const file of files){
              if( debug ){
                const folder = last(srcPath.split("/"));
                const relativeFile = folder + last(file.split(folder))
                console.log("Processing: ", relativeFile)
              }
              const rawData = await readFile(file)
              const data = interpolate(rawData.toString())
              const target = replaceDestination(file);
              await guaranteeDir(dirname(target));
              await writeFile(target,data);
            }
            if(debug){
              console.log("Finished interpolation process")
            }
            onEnd()
        }
    }
}

module.exports = template