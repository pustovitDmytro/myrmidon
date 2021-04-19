import { FunctionTester } from 'tests/utils';
import { getEscapedRegExp } from 'tests/entry';

suite('custom: getEscapedRegExp');
const tester = new FunctionTester(getEscapedRegExp);

/* eslint-disable no-useless-escape */
test('Positive: escape \\s @example', () => {
    tester.test(
        'moving citizen /s',
        'moving citizen \/s',
    );
});
