const cron = require('cron');
const fetch = require('node-fetch');
const fs = require('fs');
const { exec } = require('child_process');

const detector = cron.job("0 0 * * * *", async () => {
    const gameConsts = await (await fetch('http://203.104.209.7/gadget_html5/js/kcs_const.js')).text();
    const version = gameConsts.match(/\d\.\d\.\d\.\d/)[0];
    const script = await (await fetch(`http://203.104.209.71/kcs2/js/main.js?version=${version}`)).text();
    fs.writeFile(`../raw.js`, script, err => {
        if (!err) {
            exec(`git commit -m 'Update: \`main.js\` v${version}'`);
        }
    });
});
detector.start();