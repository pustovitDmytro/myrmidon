import path from 'path';
import documentation from 'documentation';
import mdinclude from 'mdinclude';
import handleBars from 'handlebars';
import fs from 'fs-extra';
import swag from 'swag';

import recommended from 'remark-preset-lint-recommended';
import remark from 'remark';
import toc from 'remark-toc';
import { groupBy } from '../src/helpers';
import info from '../package';

swag.registerHelpers(handleBars);
const SECTIONS = {
    checkType : 'helps to indicate type of any value',
    array     : 'helps to work with js arrays',
    benchmark : 'helps to benchmark execution time'
};

export async function buildReadme({ out } = {}) {
    const rawData = await documentation.build([ 'src/index.js' ], {});
    const docs = rawData.map(dumpDoc);
    const sections = Object.entries(groupBy(docs, 'file'))
        .map(([ key, value ]) => {
            const fileName = path.basename(key, path.extname(key));
            const description = SECTIONS[fileName];

            return {
                file   : key,
                id     : fileName,
                description,
                values : value
            };
        });
    const readmeTemplateText = mdinclude.readFileSync('templates/documentation/readme.md'); // eslint-disable-line no-sync
    const readmeTemplate = handleBars.compile(readmeTemplateText);
    const readme =  readmeTemplate({ info, sections  });
    const outPath = path.resolve(out || 'README.md');

    return new Promise((res, rej) => {
        remark()
            .use(toc)
            .use(recommended)
            .process(readme, async (err, file) => {
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

    const sections = Object.entries(groupBy(docs, 'file'))
        .map(([ key, value ]) => {
            const fileName = path.basename(key, path.extname(key));
            const description = SECTIONS[fileName];

            return {
                file   : key,
                id     : fileName,
                description,
                values : value
            };
        });
    const readmeTemplateText = mdinclude.readFileSync(entry); // eslint-disable-line no-sync
    const readmeTemplate = handleBars.compile(readmeTemplateText);
    const commit = await getGitCommit();
    const readme =  readmeTemplate({
        info,
        sections,
        commit
    });
    const outPath = path.resolve(out);

    return new Promise((res, rej) => {
        remark()
            .use(toc)
            .use(recommended)
            .process(readme, async (err, file) => {
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
    if (!p.type) return null;

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
        returns : d.returns[0] && dumpParam(d.returns[0]),

        file     : path.relative(process.cwd(), d.context.file),
        position : d.loc.start.line
    };
}
