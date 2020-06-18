import { isEmpty } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isEmpty);

suite('object: isEmpty');

test('Positive: isEmpty with empty input @example', () => {
    // tester.test([], true);
    tester.test({}, true);
});

test('Negative: isEmpty with no-array input @example', () => {
    tester.test(13, false);
    tester.test(true, false);
    tester.test([ 0 ], false);
    tester.test({ length: 0 }, false);
});

test('Negative: isEmpty with empty input @example', () => {
    tester.test(null, false);
    tester.test(undefined, false);
    tester.test(0, false);
    tester.test('', false);
    tester.test(false, false);
});

after(async () => {
    // console.log('after', this);
});

