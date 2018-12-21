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

const functions = /}\((\[function.*)\).default/s.exec(fs.readFileSync('main.js'))[1];
chunker(eval(functions)); // haven't find a better way to parse array of functions