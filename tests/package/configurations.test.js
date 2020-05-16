import { assert } from 'chai';
import main from '../entry';

suite('Configurations');

test('Positive: Single Main export', () => {
    assert.exists(main);
});
