import { isString } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isString);

suite('CheckTypes: isString');

test('Positive: isString with string input @example', function () {
    tester.test('', true);
    tester.test('abcd', true);
    tester.test('34', true);
    tester.test(new String(19), true); // eslint-disable-line no-new-wrappers
    tester.test('multiline \n text with \ttabs', true);
});

test('Negative: isString with no-string input @example', function () {
    tester.test(13, false);
    tester.test(true, false);
    tester.test(new Set(), false);
});

test('Negative: isString with empty input @example', function () {
    tester.test(null, false);
    tester.test(undefined, false);
    tester.test(0, false);
    tester.test('', true);
    tester.test(false, false);
});

after(async function () {
    // console.log('after', this);
});

