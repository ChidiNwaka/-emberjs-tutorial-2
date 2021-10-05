import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | non-found', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:non-found');
    assert.ok(route);
  });
});
