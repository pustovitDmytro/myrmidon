/**
 * Calculates sum of an array
 * @param {array} arr array of numbers
 * @returns {number} sum of numbers
 */
export function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

/**
 * Calculates mean of an array
 * @param {array} arr array of numbers
 * @returns {number} mean
 */
export function mean(arr) {
    return sum(arr) / arr.length;
}

/**
 * Calculates standart deviation
 * @param {array} arr array of numbers
 * @returns {number} standart deviation
 */
export function std(arr) {
    const mu = mean(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);

    return Math.sqrt(sum(diffArr) / arr.length);
}

/**
 * Calculates quantiles
 * @param {array} arr array of numbers
 * @param {number} q quantile (0.25)
 * @returns {number}
 */
export function quantile(arr, q) {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    }

    return sorted[base];
}

