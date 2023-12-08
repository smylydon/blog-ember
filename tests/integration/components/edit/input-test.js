import { module, test } from 'qunit';
import { setupRenderingTest } from 'blog/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | edit/input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Edit::Input />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Edit::Input>
        template block text
      </Edit::Input>
    `);

    assert.dom().hasText('template block text');
  });
});
