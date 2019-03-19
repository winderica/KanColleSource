const fs = require('fs');
const beautify = require('js-beautify').js;
const style = require('../style');
const logger = require('./logger');

const chunker = (arr) => {
    arr.forEach((func, index) => {
        try {
            const script = beautify(`const function${index} = ${func.toString()}`, style);
            fs.writeFileSync(`../functions/${index}.js`, script)
        } catch (err) {
            logger.error(err);
        }
    })
};

module.exports = chunker;
