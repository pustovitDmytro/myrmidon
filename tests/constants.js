import path from 'path';

const tmpFolder = path.join(__dirname, '../tmp/tests');
const saveExamles = process.env.SAVE_EXAMPLES && path.join(__dirname, '..', process.env.SAVE_EXAMPLES);

export {
    tmpFolder,
    saveExamles
};
