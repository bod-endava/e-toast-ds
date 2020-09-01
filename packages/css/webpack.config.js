var path = require('path');

const OUTPUT_PATH = path.resolve(__dirname, '.');
const ENTRY_POINT = path.resolve(__dirname, 'src/index.js');
const BUNDLE_NAME = 'behaviors.js'

module.exports = {
    mode: "production",
    entry: ENTRY_POINT,
    output: {
        path: OUTPUT_PATH,
        filename: BUNDLE_NAME
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    stats: {
        colors: true
    }
};