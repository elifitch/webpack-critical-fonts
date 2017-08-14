const cheerio = require('cheerio');
const fs = require('fs');
const { JSDOM } = require("jsdom");
const HeadlessChrome = require('simple-headless-chrome');
const http = require('http');

class WebpackCriticalFontPlugin {
    constructor(args) {
        // console.log(args);
        // this.$ = cheerio.load(args.html);
    }

    apply(compiler) {
        compiler.plugin('compilation', compiler => {
            compiler.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
                const jsdom = new JSDOM(htmlPluginData.html, {resources: "usable"});
                const { window } = jsdom;
                const cssFilenames = htmlPluginData.assets.css;
                const foo = cssFilenames.map(filename => {
                    return fs.readFileSync(`./dist/${filename}`, 'utf8')
                });

                const browser = new HeadlessChrome({
                    headless: true, // If you turn this off, you can actually see the browser navigate with your instructions, 
                    chrome: {
                        userDataDir: '/tmp/headlessDataDir' // This can be null, so a tmp folder will be created and then destroyed 
                    }
                });
                
                http.createServer(function (req, res) {
                  res.writeHead(200, {'Content-Type': 'text/html'});
                //   res.end(index);
                    res.end(htmlPluginData.html);
                }).listen(9615);
                // callback(null, htmlPluginData);
            });
        });
    }

    loader(stuff) {
        console.log(stuff);
    }
}

module.exports = WebpackCriticalFontPlugin;