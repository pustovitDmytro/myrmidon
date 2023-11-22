import { assert } from 'chai';
import { snippetTester } from 'tests/utils';

suite('InclusiveFilter');

test('Positive: no intersections @example', async function () {
    await snippetTester.test(({ InclusiveFilter }) => {
        const filter = new InclusiveFilter({
            include : [ 1, 2, 3 ],
            exclude : [ 4, 5 ]
        });

        assert.isTrue(filter.run(2));
        assert.isFalse(filter.run(4));
    });
});

test('Positive: conflicts @example', async function () {
    await snippetTester.test(({ InclusiveFilter }) => {
        const filter = new InclusiveFilter({
            include  : [ 1, 2, 3 ],
            exclude  : [ 3, 4 ],
            conflict : '$conflict',
            neither  : '$neither'
        });

        assert.equal(filter.run(3), '$conflict');
        assert.equal(filter.run(6), '$neither');
    });
});

test('Positive: empty filter @example', async function () {
    await snippetTester.test(({ InclusiveFilter }) => {
        const filter = new InclusiveFilter({
            pass : '$pass'
        });

        assert.equal(filter.run(1), '$pass');
    });
});

test('Positive: explicit include @example', async function () {
    await snippetTester.test(({ InclusiveFilter }) => {
        const filter = new InclusiveFilter({
            include : [ 1, 2, 3 ]
        });

        assert.isTrue(filter.run(1));
        assert.isFalse(filter.run(4));
    });
});


test('Positive: explicit exlude @example', async function () {
    await snippetTester.test(({ InclusiveFilter }) => {
        const filter = new InclusiveFilter({
            exclude : [ 1, 2, 3 ]
        });

        assert.isFalse(filter.run(1));
        assert.isTrue(filter.run(4));
    });
});
