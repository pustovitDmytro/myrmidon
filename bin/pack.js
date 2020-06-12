#!./node_modules/.bin/babel-node
import path from 'path';
import { execSync } from 'child_process';
import { docopt } from 'docopt';
import fs from 'fs-extra';
import { version, name } from '../package';
import { docoptRunner } from './utils';

const doc =
`Usage:
    pack.js [--out=<out>]
    pack.js -h | --help

Options:
   -h --help    Pack a package as it is published.
   --out=<out>  Specify path for output folder [default: tmp]
`;

docoptRunner(main, docopt(doc));

async function main({ out }) {
    const outFolder = path.resolve(out);
    const res = execSync('npm pack');
    const tmpFileName = `${name}-${version}.tgz`;

    if (!res.includes(tmpFileName)) throw new Error('FILE NAME MISSMATCH');
    const tmpFilePath = path.resolve(tmpFileName);

    execSync(`tar -xvzf ${tmpFileName} -C ${outFolder}`);
    console.log('written to: ', outFolder);

    await fs.remove(tmpFilePath);
}
