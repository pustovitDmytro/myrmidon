export function getPropertyDescriptor(obj, prop) {
    let desc;

    do {
        desc = Object.getOwnPropertyDescriptor(obj, prop);
    // eslint-disable-next-line no-cond-assign
    } while (!desc && (obj = Object.getPrototypeOf(obj)));

    return desc;
}

export function pause(time) {
    return new Promise(res => setTimeout(res, time));
}

export function getEscapedRegExp(value) {
    const matchOperatorsRe = /[$()*+.?[\\\]^{|}]/g;


    return value.replace(matchOperatorsRe, '\\$&');
}
