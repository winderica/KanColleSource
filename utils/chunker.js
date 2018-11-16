const fs = require('fs');

const chunker = arr => {
    arr.map((func, index) => {
        try {
            fs.writeFileSync(`functions/${index}.js`, `const function${index} = ${func.toString()}`)
        } catch (err) {
            console.log(err);
        }
    })
};