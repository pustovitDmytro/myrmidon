import fs from 'fs-extra';

fs.ensureDirSync('tmp') // eslint-disable-line

Object.keys(require.cache).forEach((key) => {
    delete require.cache[key];
});
