import { assert } from 'chai';
import main from '../entry';

suite('Configurations');

test('Positive: Single Main export', function () {
    assert.exists(main);
});
