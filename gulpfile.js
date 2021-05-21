const { series, watch, parallel } = require("gulp")
const { writeFile, rmdir, unlink } = require("fs").promises
const template = require("./scripts/template")
const sass = require("sass")
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")

const SYMBOL_FILE = "./src/theme.config";
const IN_DIR = "./src";
const OUT_DIR = "./sass";

const CSS_IN = "./sass/etoast.scss";
const CSS_OUT = "./etoast.css";

const TaskType = {
    Dev: "Dev",
    Prod: "Prod",
    Debug: "Debug"
}

const tryUnlink = async (path) => {
    try {
        await unlink(path)
        console.log(`Deleted ${path}`)
    } catch {
        console.warn(`Could not delete ${path}`)
    }
}

const tryRemoveDir = async (path,opts) => {
    try {
        await rmdir(path,opts)
        console.log(`Deleted ${path}`)
    } catch {
        console.warn(`Could not delete ${path}`)
    }
}

async function clean(cb){
    await tryRemoveDir("./sass",{ recursive: true })
    await tryUnlink("./etoast.css");
    await tryUnlink("./behaviors.js")
    cb()
}

function templateTask(debug=false){
    return function templateTask(cb){
        template({
            symbols: SYMBOL_FILE,
            input: IN_DIR,
            output: OUT_DIR,
            debug,
        }).run(cb)
    }
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

function webpackTask(type=TaskType.Prod){

    const devConfig = {
        ...webpackConfig,
        mode: "development",
        devtool: 'inline-source-map'
    }

    const prodConfig = {
        ...webpackConfig,
        mode: "production"
    }

    const isProd = type === TaskType.Prod;

    return function webpackTask(cb){
        webpack(isProd ? prodConfig : devConfig ,(err, stats) => { 
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }
            }
    
            if ( stats && stats.hasErrors()) {
                console.error(stats.toJson().errors);
            }
        
            if ( stats && stats.hasWarnings()) {
                console.warn(stats.toJson().warnings);
            }
            
            cb()
        })
    }
}

const generateSeries = (type=TaskType.Prod) => {
    const isProd = type === TaskType.Prod;
    const isDebug = type === TaskType.Debug;
    const sassTask = isProd ? sassProd : sassDev;
    return parallel(
        webpackTask(type),
        series(templateTask(isDebug),sassTask)
    )
}
const generateCleanSeries = (type=TaskType.Prod) => {
    return series(
        clean,
        generateSeries(type)
    )
}

exports.clean = clean
exports.dev = generateCleanSeries(TaskType.Dev);
exports.build = generateCleanSeries(TaskType.Prod);
exports.debug = generateCleanSeries(TaskType.Debug);
exports.watch = () => watch("src/",{ ignoreInitial: false }, generateSeries(TaskType.Dev))
exports.watch_debug = () => watch("src/",{ ignoreInitial: false }, generateSeries(TaskType.Debug))