import { searchFor } from 'tests/entry';
import { FunctionTester } from '../../utils';

const tester = new FunctionTester(searchFor);

suite('Common: searchFor');

test('Positive: search string for matches @example', function () {
    tester.test('next hit nearby prepare', 'ar', [
        {
            'captures' : [],
            'full'     : 'ar',
            'index'    : 11,
            'input'    : 'next hit nearby prepare'
        },
        {
            'captures' : [],
            'full'     : 'ar',
            'index'    : 20,
            'input'    : 'next hit nearby prepare'
        }

    ]);

    tester.test('a b 3 c 1 d 2 e f', /\d/, [
        {
            'captures' : [],
            'full'     : '3',
            'index'    : 4,
            'input'    : 'a b 3 c 1 d 2 e f'
        },
        {
            'captures' : [],
            'full'     : '1',
            'index'    : 8,
            'input'    : 'a b 3 c 1 d 2 e f'
        },
        {
            'captures' : [],
            'full'     : '2',
            'index'    : 12,
            'input'    : 'a b 3 c 1 d 2 e f'
        }
    ]);

    tester.test('discover WON present consist hand', /\w*(on)\w*/i, [
        {
            'captures' : [
                'ON'
            ],
            'full'  : 'WON',
            'index' : 9,
            'input' : 'discover WON present consist hand'
        },
        {
            'captures' : [
                'on'
            ],
            'full'  : 'consist',
            'index' : 21,
            'input' : 'discover WON present consist hand'
        }
    ]);
});

test('Negative: no occurrences found @example', function () {
    tester.test('southern bell drink fresh list', /truth/g, []);
});

after(async function () {
    // console.log('after', this);
});

