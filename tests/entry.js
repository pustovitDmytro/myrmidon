import path from 'path';

const isBuild = process.env.BUILD && [ '1', 'true' ].includes(process.env.BUILD);
const entry = process.env.ENTRY && path.resolve(process.env.ENTRY);

// eslint-disable-next-line import/no-commonjs
module.exports = entry && require(entry) || isBuild && require('../lib') || require('../src');

