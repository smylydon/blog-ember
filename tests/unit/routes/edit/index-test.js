import { module, test } from 'qunit';
import { setupTest } from 'blog/tests/helpers';

module('Unit | Route | edit/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:edit/index');
    assert.ok(route);
  });
});
