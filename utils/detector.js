const cron = require('cron');
const fetch = require('node-fetch');
const { promisify } = require('util');
const fs = require('fs').promises;
const exec = promisify(require('child_process').exec);
const beautify = require('js-beautify').js;
const chunker = require('./chunker');
const searcher = require('./searcher');
const logger = require('./logger');
const jsStyle = require('../style');
const jsonStyle = {
    "indent_size": "2",
    "eol": "\r\n",
};
const detector = cron.job("0 */30 * * * *", async () => {
    try {
        const gameConsts = await (await fetch('http://203.104.209.7/gadget_html5/js/kcs_const.js')).text();
        const version = gameConsts.match(/\d\.\d\.\d\.\d/)[0];
        const currentVersion = await fs.readFile('../version');
        if (version !== currentVersion.toString()) {
            logger.info(`Detected main.js v${version}`);
            const script = await (await fetch(`http://203.104.209.71/kcs2/js/main.js?version=${version}`)).text();
            await fs.writeFile(`../raw.js`, script);
            await fs.writeFile(`../main.js`, beautify(script, jsStyle));
            await fs.writeFile('../version', version);
            const functions = /}\((\[function.*)\).default/s.exec(script)[1];
            chunker(eval(functions)); // haven't find a better way to parse array of functions
            const start = /=\s*(\d*)\)\s*}\(\[/.exec(script)[1];
            await fs.writeFile('../tree.json', beautify(JSON.stringify(searcher(start)), jsonStyle));
            const { stdout, stderr } = await exec(`"../pull.sh" Update: main.js v${version}`);
            logger.info(stdout);
            logger.error(stderr);
        }
    } catch (err) {
        logger.error(err);
    }
});
detector.start();
