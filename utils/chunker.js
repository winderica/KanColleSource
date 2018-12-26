const fs = require('fs');
const beautify = require('js-beautify').js;
const style = require('../style');

const chunker = (arr) => {
    arr.forEach(async (func, index) => {
        try {
            const script = beautify(`const function${index} = ${func.toString()}`, style);
           fs.writeFileSync(`../functions/${index}.js`, script)
        } catch (err) {
            console.log(err);
        }
    })
};

module.exports = chunker;
