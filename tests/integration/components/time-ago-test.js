import { module, test } from 'qunit';
import { setupRenderingTest } from 'blog/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | time-ago', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TimeAgo />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TimeAgo>
        template block text
      </TimeAgo>
    `);

    assert.dom().hasText('template block text');
  });
});
