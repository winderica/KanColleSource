const fs = require('fs');

const chunker = a => {
    for (let i = 0; i < 2000; i++) {
        if (a[i]) {
            try {
                fs.writeFileSync(`./functions/${i}.js`, `const function${i} = ${a[i].toString()}`)
            } catch (err) {
                console.log(err);
                break;
            }
        }
    }
};