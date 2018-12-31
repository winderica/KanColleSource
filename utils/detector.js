const cron = require('cron');
const fetch = require('node-fetch');
const fs = require('fs').promises;
const { exec } = require('child_process');
const beautify = require('js-beautify').js;
const chunker = require('./chunker');
const searcher = require('./searcher');
const jsStyle = require('../style');
const jsonStyle = {
    "indent_size": "2",
    "eol": "\r\n",
};
const detector = cron.job("0 0 * * * *", async () => {
    try {
        const gameConsts = await (await fetch('http://203.104.209.7/gadget_html5/js/kcs_const.js')).text();
        const version = gameConsts.match(/\d\.\d\.\d\.\d/)[0];
        const currentVersion = await fs.readFile('../version');
        if (version !== currentVersion.toString()) {
            const script = await (await fetch(`http://203.104.209.71/kcs2/js/main.js?version=${version}`)).text();
            await fs.writeFile(`../raw.js`, script);
            await fs.writeFile(`../main.js`, beautify(script, jsStyle));
            await fs.writeFile('../version', version);
            const functions = /}\((\[function.*)\).default/s.exec(script)[1];
            chunker(eval(functions)); // haven't find a better way to parse array of functions
            const start = /=\s*(\d*)\)\s*}\(\[/.exec(script)[1];
            await fs.writeFile('../tree.json', beautify(JSON.stringify(searcher(start)), jsonStyle));
            exec(`git add ..;git commit -m -a "Update: main.js v${version}";git push`, (err, stdout, stderr) => {
                console.error(err);
                console.log(stdout);
                console.error(stderr);
            });
        }
    } catch (err) {
        console.error(err);
    }
});
detector.start();
