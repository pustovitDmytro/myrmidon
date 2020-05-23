import { FunctionTester } from 'tests/utils';
import { fill } from 'tests/entry';

suite('custom: fill');

const tester = new FunctionTester(fill);

test('Positive: fill template @snippet', async () => {
    tester.test(
        'Hello {user.firstName} {user.lastName} {user.avatar.url}',
        { user: { firstName: 'Jason', lastName: 'Gregory' } },
        'Hello Jason Gregory '
    );
});
