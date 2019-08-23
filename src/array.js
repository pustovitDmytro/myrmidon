import { isArray } from './checkType';

/**
 * transforms any value to Array
 * @param {any} value any array or primitive for examination
 * @returns {array} [] if no value passed, value if it is Array and [value] in other cases
 */
export function toArray(value) {
    if (!value) return [];

    return isArray(value) ? value : [ value ];
}