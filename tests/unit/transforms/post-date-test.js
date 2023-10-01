import { module, test } from 'qunit';

import { setupTest } from 'blog/tests/helpers';

module('Unit | Transform | post date', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:post-date');
    assert.ok(transform);
  });
});
