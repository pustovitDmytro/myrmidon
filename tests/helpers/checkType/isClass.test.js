import { isClass } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(isClass);

suite('CheckTypes: isClass');

test('Positive: isClass with class input @example', () => {
    tester.test(class A {}, true);
});

test('Negative: isClass with no-class input @example', () => {
    tester.test(13, false);
    tester.test(true, false);
    tester.test(new Set(), false);
    tester.test(() => {}, false);
});

test('Negative: isClass with empty input @example', () => {
    tester.test(null, false);
    tester.test(undefined, false);
    tester.test(0, false);
    tester.test(false, false);
});

after(async () => {
    // console.log('after', this);
});

