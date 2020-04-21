const { series, watch } = require("gulp")
const { writeFile, rmdir, unlink } = require("fs").promises
const template = require("./scripts/template")
const sass = require("sass")

const SYMBOL_FILE = "./src/theme.config";
const IN_DIR = "./src";
const OUT_DIR = "./sass";

const CSS_IN = "./sass/etoast.scss";
const CSS_OUT = "./etoast.css";

async function clean(cb){
    try{
        await rmdir("./temp",{ recursive: true })
        await unlink("./etoast.css");
    } catch {
        console.log("Nothing to delete")
    }
    cb()
}

function templateTask(cb){
    template({
        symbols: SYMBOL_FILE,
        input: IN_DIR,
        output: OUT_DIR,
        debug: false
    }).run(cb)
}

async function sassProd(cb){
    const result = sass.renderSync({
        file: CSS_IN,
        outFile: CSS_OUT,
        outputStyle: "compressed",
        sourceMap: false,
    })
    await writeFile(CSS_OUT,result.css.toString())
    cb()
}

async function sassDev(cb){
    const result = sass.renderSync({
        file: CSS_IN,
        outFile: CSS_OUT,
        outputStyle: "expanded",
        sourceMap: true,
    })
    await writeFile(CSS_OUT,result.css.toString())
    cb()
}

exports.clean = clean
exports.watch = () => watch("src/",{ ignoreInitial: false },series(templateTask, sassDev))
exports.dev = series(clean,templateTask, sassDev)
exports.build = series(clean,templateTask,sassProd)
