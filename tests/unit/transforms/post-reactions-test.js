import { module, test } from 'qunit';

import { setupTest } from 'blog/tests/helpers';

module('Unit | Transform | post reactions', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:post-reactions');
    assert.ok(transform);
  });
});
