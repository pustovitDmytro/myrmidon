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
                console.log('done buildReadme', outPath);
                res();
            });
    });
}
const getGitCommit = async () => {
    const gitId = await fs.readFile('.git/HEAD', 'utf8');

    if (gitId.indexOf(':') === -1) {
        return gitId;
    }
    const refPath = `.git/${  gitId.substring(5).trim()}`;
    const content = await fs.readFile(refPath, 'utf8');

    return content.trim();
};

export async function buildDocs() {
    return Promise.all([
        await build('templates/documentation/reference.md', 'docs/reference.md'),
        await build('templates/documentation/docs.md', 'docs/index.md')
    ]);
}

export async function build(entry, out) {
    const rawData = await documentation.build([ 'src/index.js' ], {});
    const docs = rawData.map(dumpDoc);
    const functions = docs.filter(d => d.type === 'function');
    const readmeTemplateText = mdinclude.readFileSync(entry); // eslint-disable-line no-sync
    const readmeTemplate = handleBars.compile(readmeTemplateText);
    const commit = await getGitCommit();
    const readme =  readmeTemplate({
        ...info,
        functions,
        commit
    });
    const outPath = path.resolve(out);

    return new Promise((res, rej) => {
        remark()
            .use(toc)
            .use(recommended)
            .process(readme, async function (err, file) {
                if (err) rej(err);
                await fs.writeFile(outPath, String(file));
                console.log('done build', outPath);
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

        file     : path.relative(process.cwd(), d.context.file),
        position : d.loc.start.line
    };
}
