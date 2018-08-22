const cron = require('cron');
const fetch = require('node-fetch');
const fs = require('fs');
const detector = cron.job("0 0 * * * *", function () {
    fetch('http://203.104.209.7/gadget_html5/js/kcs_const.js')
        .then(res => res.text())
        .catch(err => console.log(err))
        .then(res => {
            const version = res.match(/\d\.\d\.\d\.\d/)[0];
            fetch(`http://203.104.209.71/kcs2/js/main.js?version=${version}`)
                .then(res => res.text())
                .catch(err => console.log(err))
                .then(res => {
                    fs.access(`../raw-${version}.js`, fs.constants.F_OK, err => {
                        err && fs.writeFile(`../raw-${version}.js`, res, err => {
                            err && console.log(err);
                        });
                    });
                })
        });
});
detector.start();