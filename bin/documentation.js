#!./node_modules/.bin/babel-node

import { docopt } from 'docopt';
import { buildReadme } from '../tools/documentation';
import { docoptRunner } from './utils';

const doc =
`Usage:
    documentation.js readme [--out=<out>]
    documentation.js -h | --help

Options:
   -h --help    Documentation generator.
   readme       Generate readme
   --out=<out>  Specify path for output file
`;

docoptRunner(main, docopt(doc));

async function main({ readme, ...opts }) {
    if (readme) {
        await buildReadme(opts);
    }
}
