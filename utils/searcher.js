const fs = require('fs');
const logger = require('./logger');

const searcher = (index) => {
    const searched = [];

    const searchHelper = (index) => {
        try {
            const res = fs.readFileSync(`../functions/${index}.js`);
            const imports = [...new Set(res.toString().match(/i\(\d+\)|i\(1e3\)/g))];
            const tree = { [index]: null };
            if (searched[index]) {
                return tree;
            }
            searched[index] = true;
            if (!imports) {
                return tree;
            }
            const thousand = imports.indexOf('i(1e3)');
            if (thousand >= 0) {
                imports[thousand] = 'i(1000)';
            }
            const results = imports.map(i => searchHelper(i.match(/\d+/)[0]));
            results.map(i => tree[index] ? tree[index][Object.keys(i)[0]] = Object.values(i)[0] : tree[index] = i);
            return tree;
        } catch (err) {
            logger.error(err);
        }
    };

    for (let i = 0; i < searched.length; i++) {
        if (!searched[i]) {
            logger.error(`Function ${i} not searched`)
        }
    }
    return searchHelper(index);
};

module.exports = searcher;
