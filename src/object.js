import { isObject, isArray } from './checkType';

/**
 * cleans object from undefined fields recursievly
 * @param {Object} obj primitive for examination
 * @returns {Object} object without undefined fields
 */
export function cleanUndefined(obj, { cache = new Set() } = {}) {
    cache.add(obj);
    for (const key of Object.keys(obj)) {
        if (obj[key] === undefined) delete obj[key]; // eslint-disable-line no-param-reassign
        if (isObject(obj[key])) {
            if (cache.has(obj[key])) continue;
            cleanUndefined(obj[key], { cache });
        }
    }

    return obj;
}

/**
 * create deep clone of object
 * @param {Object} x input object
 * @returns {Object} deep copy
 *
 * Note that object can't have circular references
 */
export function clone(x) {
    return JSON.parse(JSON.stringify(x));
}

/**
 * determines whether the object or array is empty
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is empty or false otherwise
 */
export function isEmpty(x) {
    const isObjectEmpty = isObject(x) && Object.keys(x).length === 0;
    const isArrayEmpty = isArray(x) && x.keys(x).length === 0;

    return isObjectEmpty || isArrayEmpty;
}
