const fs = require('fs');
const fsPath = require('fs-path');
const rimraf = require('rimraf');
// const glyphhanger = require('glyphhanger');
const { exec } = require('child_process');

class WebpackCriticalFontPlugin {
    constructor(args) {
        // console.log(args);
        // this.$ = cheerio.load(args.html);
    }

    apply(compiler) {
        compiler.plugin('compilation', compiler => {
            // compiler.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
            compiler.plugin('html-webpack-plugin-after-emit', (htmlPluginData, callback) => {
                // // fsPath.writeFile(`${__dirname}/tmp/tmp.html`, htmlPluginData.html, 'utf8', function(err) {
                // //     if (!err) {
                // //         console.log('done');
                // //     } else {
                // //         console.error(err)
                // //     }
                // // });
                // fs.readFile(`${__dirname}/dist/index.html`, 'utf8', function(err, data) {
                //     console.log(data);
                // });
                // exec(`glyphhanger ${__dirname}/dist/index.html`, (err, stdout, stderr) => {
                //     if (err) {
                //       console.error(`exec error: ${err}`);
                //       return;
                //     }
                //     console.log(`Number of files ${stdout}`);
                // });
            });
        });
    }

    loader(stuff) {
        console.log(stuff);
    }
}

module.exports = WebpackCriticalFontPlugin;