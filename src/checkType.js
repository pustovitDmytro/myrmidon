import { getPropertyDescriptor } from './common';

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
    return isValue(x) && typeof x === 'function' && /class/i.test(x.toString());
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
 * determines whether the value is Number
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is number, false otherwise
 */
export function isNumber(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object Number]' && !isNaN(x);
}

/**
 * determines whether the value is Boolean
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is boolean, false otherwise
 */
export function isBoolean(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object Boolean]';
}

/**
 * determines whether the value is Stream
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is Stream, false otherwise
 * @see {@link https://nodejs.org/api/stream.html} Node documentation for details
 */
export function isStream(x) {
    return isValue(x) && isFunction(x.pipe);
}

/**
 * determines whether the value is function getter
 * @param {any} x target class for examination
 * @param {string} name name of property to check is it getter in x
 * @returns {boolean} true if x is Getter, false otherwise
 */
export function isGetter(x, name) {
    if (!isValue(x) || !isValue(x[name])) return false;

    return !!getPropertyDescriptor(x, name).get;
}

/**
 * determines whether the value is regualr expression
 * @param {any} x primitive for examination
 * @returns {boolean} true if x is regualr expression, false otherwise
 */
export function isRegexp(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object RegExp]';
}
