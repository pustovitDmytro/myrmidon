import { isArray, isValue } from './checkType';

/**
 * transforms any value to Array
 * @param {any} value any array or primitive for examination
 * @returns {array} [] if no value passed, value if it is Array and \[value] in other cases
 */
export function toArray(value) {
    if (!isValue(value)) return [];

    return isArray(value) ? value : [ value ];
}

/**
 * generates filter function, that leaves only unique items
 * @param {function} isEqual equality function which receives 2 elements to compare, should return true if elements are equal
 * @returns {function} filter function, that leaves only unique items
 */
export function uniqueFilter(isEqual) {
    return function filter(item, index, array) {
        const occurrence = isEqual
            ? array.findIndex((i) => isEqual(item, i))
            : array.indexOf(item);

        return occurrence === index;
    };
}

/**
    filter function, that leaves only unique items with same id property
    @constant
    @type {function}
*/
export const uniqueIdFilter = uniqueFilter((a, b) => a.id === b.id);

/**
    filter function, that leaves only identicly unique items (same by ===)
    @constant
    @type {function}
*/
export const uniqueIdenticFilter = uniqueFilter((a, b) => a === b);

/**
    filter function, that leaves only exited values
    @constant
    @type {function}
*/
export const existanceFilter = i => isValue(i);

/**
    filter function, that leaves all items
    @constant
    @type {function}
*/
export const passFilter = () => true;

/**
 * flattens array
 * @param {array} any array with nested arrays
 * @returns {array} flattened array
 */
export function flatten(arr) {
    // eslint-disable-next-line unicorn/no-array-reduce
    return toArray(arr).reduce((flat, toFlatten) => {
        // eslint-disable-next-line unicorn/prefer-spread
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

/**
 * checks are all items of array unique
 * @param {array} any array
 * @param {object} settings method configuration
 * @param {string} settings.field property to treat as unique value
 * @param {boolean} settings.ignoreEmpty if set, empty values will be ignored
 * @returns {array} flattened array
 */
export function isUnique(array, { field, ignoreEmpty } = {}) {
    const map = new Map();

    for (const item of array) {
        const value = !ignoreEmpty && field ? item[field] : item;

        if (ignoreEmpty && (value === undefined || value === null)) continue;
        if (map.has(value)) return false;
        map.set(value);
    }

    return true;
}

/**
 * get last element of an array
 * @param {array} any array
 * @returns {any} last array element
 */
export function last(array) {
    return array[array.length - 1];
}

export function groupBy(array, similar) {
    const groupFields = toArray(similar);

    // eslint-disable-next-line unicorn/no-array-reduce
    return array.reduce((x, val) => {
        const uniqueValue = groupFields.map(key => val[key]).join('.');

        return {
            ...x,
            [uniqueValue] : [ ...(x[uniqueValue] || []),  val ]
        };
    }, {});
}
