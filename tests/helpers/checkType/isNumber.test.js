import { isNumber } from 'tests/entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isNumber);

suite('CheckTypes: isNumber');

test('Positive: isNumber with number input @example', () => {
    tester.test(1, true);
    tester.test(-5, true);
    tester.test(0, true);
});

test('Negative: isNumber with no-number input @example', () => {
    tester.test('14', false);
    tester.test('', false);
    tester.test(NaN, false);
    tester.test(null, false);
    tester.test(undefined, false);
});

after(async () => {
    // console.log('after', this);
});

