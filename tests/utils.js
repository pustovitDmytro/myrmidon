import path from 'path';
import  {
    SnippetTester,
    FunctionTester as FT,
    Mocha
} from 'code-chronicle';
import myrmidon from 'tests/entry';
import { saveExamles, entry } from './constants';

let mocha = null;

if (saveExamles) {
    mocha = new Mocha({
        examplesPath : path.resolve(process.cwd, saveExamles)
    });
    mocha.installHooks();
}

export class FunctionTester extends FT {
    constructor(fn) {
        super(fn, { mocha });
    }
}


export const snippetTester = new SnippetTester(
    [ myrmidon ],
    { mocha }
);

export const sleep = time => new Promise(res => setTimeout(res, time));

export function load(relPath, clearCache) {
    const absPath = path.resolve(entry, relPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];
    // eslint-disable-next-line security/detect-non-literal-require
    const result =  require(absPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];

    return result;
}

export function resolve(relPath) {
    return require.resolve(path.join(entry, relPath));
}
