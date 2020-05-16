#!./node_modules/.bin/babel-node

import { docopt } from 'docopt';
import { buildReadme, buildDocs } from '../tools/documentation';
import { docoptRunner } from './utils';

const doc =
`Usage:
    documentation.js readme [--out=<out>]
    documentation.js reference [--out=<out>]
    documentation.js -h | --help

Options:
   -h --help    Documentation generator.
   readme       Generate readme
   --out=<out>  Specify path for output file
`;

docoptRunner(main, docopt(doc));

async function main({ readme, reference, ...opts }) {
    if (readme) {
        await buildReadme(opts);
    }
    if (reference) {
        await buildDocs(opts);
    }
}
