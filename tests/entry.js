import path from 'path';

let entry = '../src';

if (process.env.BUILD) entry = '../lib';
if (process.env.ENTRY) entry = path.resolve(process.env.ENTRY);

module.exports = require(entry); // eslint-disable-line import/no-commonjs
