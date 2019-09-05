import path from 'path';
import documentation from 'documentation';
import mdinclude from 'mdinclude';
import handleBars from 'handlebars';
import fs from 'fs-extra';
import info from '../package';

const recommended = require('remark-preset-lint-recommended');
const remark = require('remark');
const toc = require('remark-toc');

export async function buildReadme({ out } = {}) {
    const rawData = await documentation.build([ 'src/index.js' ], {});
    const docs = rawData.map(dumpDoc);
    const functions = docs.filter(d => d.type === 'function');
    const readmeTemplateText = mdinclude.readFileSync('templates/documentation/readme.md'); // eslint-disable-line no-sync
    const readmeTemplate = handleBars.compile(readmeTemplateText);
    const readme =  readmeTemplate({ ...info, functions });
    const outPath = path.resolve(out || 'README.md');

    return new Promise((res, rej) => {
        remark()
            .use(toc)
            .use(recommended)
            .process(readme, async function (err, file) {
                if (err) rej(err);
                await fs.writeFile(outPath, String(file));
                console.log('done', outPath);
                res();
            });
    });
}

function dumpDescription(d) {
    return d.children[0].children[0].value;
}

function dumpParam(p) {
    return {
        name        : p.name,
        type        : p.type.name,
        description : dumpDescription(p.description)
    };
}

function dumpDoc(d) {
    return {
        name        : d.name,
        type        : d.kind,
        comment     : d.comment,
        description : dumpDescription(d.description),

        params  : d.params.map(dumpParam),
        returns : dumpParam(d.returns[0]),

        file     : d.context.file,
        position : d.loc.start.line
    };
}
