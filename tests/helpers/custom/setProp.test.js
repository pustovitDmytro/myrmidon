import { FunctionTester } from 'tests/utils';
import { setProp } from 'tests/entry';
/* eslint-disable prefer-arrow-callback */

suite('custom: setProp');

const tester = new FunctionTester(setProp);

test('Positive: setProp', function () {
    tester.test(
        {},
        'user.firstName',
        'Jason',
        undefined,
        { user: { firstName: 'Jason' } }
    );

    tester.test(
        {},
        'users.0.email',
        'ehcuwe@pat.sd',
        { users: [ { email: 'ehcuwe@pat.sd' } ] }
    );

    tester.test(
        { user: { id: 1 } },
        'user.email',
        'ehcuwe@pat.sd',
        { user: { id: 1, email: 'ehcuwe@pat.sd' }  }
    );
});
