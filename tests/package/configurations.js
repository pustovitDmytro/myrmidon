import { assert } from 'chai';
import package from '../entry';

suite('Configurations');

test('Positive: Single Main export', function () {
    assert.exists(package);
});
