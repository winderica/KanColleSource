const cron = require('cron');
const fetch = require('node-fetch');
const fs = require('fs');
const { exec } = require('child_process');

const detector = cron.job("0 0 * * * *", async () => {
    try {
        const gameConsts = await (await fetch('http://203.104.209.7/gadget_html5/js/kcs_const.js')).text();
        const version = gameConsts.match(/\d\.\d\.\d\.\d/)[0];
        const currentVersion = fs.readFileSync('../version').toString();
        if (version !== currentVersion) {
            const script = await (await fetch(`http://203.104.209.71/kcs2/js/main.js?version=${version}`)).text();
            fs.writeFileSync(`../raw.js`, script);
            fs.writeFileSync('../version', version);
            exec('git add ../raw.js');
            exec(`git commit -m "Update: \`raw.js\` v${version}"`);
            exec('git push origin master');
        }
    } catch (e) {
        console.log(e);
    }
});
detector.start();