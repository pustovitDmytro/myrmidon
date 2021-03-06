import { isNumber, isObject, isFunction, isRegexp } from './checkType';
import { random } from './random';

const abortedKey = Symbol('myrmidon_retry_aborted');

function abort(error = new Error('Unknown Retry Abortion')) {
    error[abortedKey] = true;
    throw error;
}

function calculateTimeout(opts, attempt = 0) {
    if (isNumber(opts)) return opts;
    if (isFunction(opts)) return opts(attempt);
    if (isObject(opts)) {
        const rand = opts.randomize ? random.uniform(0.5, 2) : 1;

        return Math.min(rand * opts.min * Math.pow(opts.factor || 2, attempt), opts.max);
    }
}

function defaultOnRetry(err, iter, { retries, next }) {
    if (err[abortedKey]) throw err;
    if (iter === retries) throw err;
    next();
}

/**
 * Retrying function calls on errors
 * @param {function} retrier function (sync or async) that will be retried
 * @param {object} settings method configuration
 * @param {function} [settings.onRetry] function that will be called on every retry attempt. Receives (error, iter, abortedKey). If error is thrown from onRetry, retrying is aborted.
 * @param {number} [settings.retries=10] max retry times
 * @param {(number|object|function)} [settings.timeout=100] timeout configuration. If number specifies time in ms, if object - specifies Exponential Backoff with properties min, max, factor, randomize
 * @returns {any} result of retrier function call
 */
export function retry(retrier, { onRetry = defaultOnRetry, retries = 10, timeout = 100 } = {}) {
    return new Promise((res, rej) => {
        function attempt(iter) {
            try {
                const val = retrier(abort, iter);

                Promise.resolve(val)
                    .then(res)
                    .catch((err) => onError(err, iter));
            } catch (err) {
                onError(err, iter);
            }
        }

        function nextAttempt(iter) {
            setTimeout(
                () => attempt(iter + 1),
                calculateTimeout(timeout, iter + 1)
            );
        }

        function onError(err, iter) {
            try {
                onRetry(err, iter, {
                    retries,
                    abort,
                    next : () => nextAttempt(iter)
                });
            } catch (error) {
                rej(error);
            }
        }

        attempt(0, { res, rej });
    });
}

/**
 * Get nested property of object
 * @param {object} obj input data
 * @param {string} path property path
 * @param {object} settings method configuration
 * @param {string} [settings.delimeter='.'] path delimeter notation
 * @returns {any} deep object property, or null if nothing found
 */
export function getProp(obj, path, { delimeter = '.' } = {}) {
    return path.split(delimeter).reduce((accum, pathElem) => {
        try {
            return accum[pathElem];
        } catch (error) {
            return null;
        }
    }, obj);
}

/**
 * Fills string template with specified data
 * @param {string} template string template
 * @param {object} data input data
 * @param {object} settings method configuration
 * @param {array} [settings.delimiters=[ '{', '}' ]] literal delimiter flags
 * @param {regExp} [settings.regExp] regexp to parse template (replaces full match with groups)
 * @returns {string} filled template
 */
export function fill(template, data, { delimiters = [ '{', '}' ], regExp } = {}) {
    const regexp = regExp || new RegExp(`${delimiters[0]}(.+?)${delimiters[1]}`, 'g');

    let result;

    let filled = template;

    while ((result = regexp.exec(template)) !== null) { // eslint-disable-line  no-cond-assign
        const path = result[1].trim();

        if (path) {
            const value = getProp(data, path) || '';

            filled = filled.replace(result[0], value);
        }
    }

    return filled;
}

/**
 * Search all occurrences of pattern in text
 * @param {string} text where to search
 * @param {regExp} [pattern] search pattern. If pattern is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(pattern)
 * @returns {array} occurrences
 */
export function searchFor(text, pattern) {
    const currentFlags = isRegexp(pattern) ? pattern.flags : '';
    const regexp = new RegExp(
        isRegexp(pattern) ? pattern.source : pattern,
        currentFlags.includes('g') ? currentFlags : `${currentFlags}g`
    );
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
