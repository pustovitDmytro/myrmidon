import { cleanUndefined } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(cleanUndefined);

suite('object: cleanUndefined');

test('Positive: cleanUndefined @example', () => {
    tester.test({ x: { a: null, b: undefined }, c: 0 }, { x: { a: null }, c: 0 });
});

after(async () => {
    // console.log('after', this);
});

