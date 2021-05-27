function docoptKey(key) {
    const patterns = [ /--(.+)/, /<(.+)>/ ];

    for (const pattern of patterns) {
        const match = key.match(pattern);

        if (match && match.index === 0) {
            return match[1];
        }
    }

    return key;
}

function docoptParams(opts, { include, exclude } = {}) {
    const clean = {};
    const filtered = Object.keys(opts)
        .map(raw => ({ raw, key: docoptKey(raw) }))
        .filter(({ key }) => include ? include.includes(key) : true)
        .filter(({ key }) => exclude ? !exclude.includes(key) : true);

    for (const { raw, key } of filtered) {
        clean[key] = opts[raw];
    }

    return clean;
}

export async function docoptRunner(f, opts) {
    try {
        await f(docoptParams(opts));
        console.log('DONE');
        process.exit(0);
    } catch (error) {
        console.error(error);
        console.log('FAILED');
        process.exit(1);
    }
}
