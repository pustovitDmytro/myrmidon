module.exports = process.env.BUILD // eslint-disable-line import/no-commonjs
    ? require('../lib')
    : require('../src');

