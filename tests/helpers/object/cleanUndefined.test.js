import { assert } from 'chai';
import { cleanUndefined } from '../../entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(cleanUndefined);

suite('object: cleanUndefined');

test('Positive: cleanUndefined @example', () => {
    tester.test({ x: { a: null, b: undefined }, c: 0 }, { x: { a: null }, c: 0 });
});

test('Positive: cleanUndefined on circullar structure', () => {
    const obj = { a: { b: null, c: undefined } };

    obj.a.obj = obj;
    assert.deepEqual(cleanUndefined(obj), { a: { b: null, obj } });
});

after(async () => {
    // console.log('after', this);
});

