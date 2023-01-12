/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const path = require('path');

const root = path.resolve(__dirname, '../../');


module.exports = {
    filterExamples(values, cases) {
        const examples = cases.filter(c => c.helpers.includes(values.name));
        const testFiles = new Set(examples.map(e => path.relative(root, e.file)));

        return { examples, testFiles: [ ...testFiles ] };
    }
};
