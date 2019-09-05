/**
 * determines whether the value is string
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is string, false otherwise
 */
export function isString(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object String]';
}

/**
 * determines whether the value is class
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is class, false otherwise
 */
export function isClass(x) {
    return isValue(x) && typeof x === 'function' && /^\s*class\s+/.test(x.toString());
}

/**
 * determines whether the value is function
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is function, false otherwise
 */
export function isFunction(x) {
    return isValue(x) && [ '[object Function]', '[object AsyncFunction]' ].includes(Object.prototype.toString.call(x));
}

/**
 * determines whether the value is an object
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is an object, false otherwise
 */
export function isObject(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object Object]';
}

/**
 * determines whether the value is array
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is array, false otherwise
 */
export function isArray(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object Array]';
}

/**
 * determines whether the value is promise
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is promise, false otherwise
 */
export function isPromise(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object Promise]';
}

/**
 * determines whether the value is set
 * @param {any} x primitive for examination
 * @returns {boolean} false if x is null or undefined, true otherwise
 */
export function isValue(x) {
    return x !== null && x !== undefined;
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
