import { FunctionTester } from 'tests/utils';
import { fill } from 'tests/entry';
/* eslint-disable prefer-arrow-callback */

suite('custom: fill');

const tester = new FunctionTester(fill);

test('Positive: fill template @example', async () => {
    tester.test(
        'Hello {user.firstName} {user.lastName} {user.avatar.url}',
        { user: { firstName: 'Jason', lastName: 'Gregory' } },
        'Hello Jason Gregory '
    );
});
