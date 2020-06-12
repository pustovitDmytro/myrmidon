let entry = '../src';

if (process.env.BUILD) entry = '../lib';
if (process.env.ENTRY) entry = process.env.ENTRY;

console.log('entry: ', entry);
module.exports = require(entry); // eslint-disable-line import/no-commonjs
