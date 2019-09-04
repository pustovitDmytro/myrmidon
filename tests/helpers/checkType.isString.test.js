import { isString } from '../entry';
import { FunctionTester } from '../utils';

const tester = new FunctionTester(isString);

suite('CheckTypes: isString');

test('Positive: isString with string input', function () {
    tester.testOne('', true);
    tester.testOne('abcd', true);
    tester.testOne('34', true);
    tester.testOne(new String(19), true);
    tester.testOne('multiline \n text with \ttabs', true);
});

test('Negative: isString with no-string input', function () {
    tester.testOne(13, false);
    tester.testOne(true, false);
    tester.testOne(new Set(), false);
});

test('Negative: isString with empty input', function () {
    tester.testOne(null, false);
    tester.testOne(undefined, false);
    tester.testOne(0, false);
    tester.testOne('', true);
    tester.testOne(false, false);
});

after(async function () {
    // console.log('after', this);
});

