import { module, test } from 'qunit';
import { setupRenderingTest } from 'blog/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | reaction-buttons', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ReactionButtons />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ReactionButtons>
        template block text
      </ReactionButtons>
    `);

    assert.dom().hasText('template block text');
  });
});
