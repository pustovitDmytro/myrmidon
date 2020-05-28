export function getPropertyDescriptor(obj, prop) {
    let desc;

    do {
        desc = Object.getOwnPropertyDescriptor(obj, prop);
    } while (!desc && (obj = Object.getPrototypeOf(obj))); //eslint-disable-line

    return desc;
}

export function pause(time) {
    return new Promise(res => setTimeout(res, time));
}

export function getEscapedRegExp(value) {
    const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    const escaped = value.replace(matchOperatorsRe, '\\$&');

    return escaped;
}

export function searchFor(text, regexp) {
    const results = [];

    let match;

    do {
        match = regexp.exec(text);
        if (match) {
            const [ full, ...captures ] = match;
            const { index, input } = match;

            results.push({
                full,
                captures,
                index,
                input
            });
        }
    } while (match);

    return results;
}
