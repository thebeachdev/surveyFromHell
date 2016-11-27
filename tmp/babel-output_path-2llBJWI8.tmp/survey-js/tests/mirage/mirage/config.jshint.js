define('survey-js/tests/mirage/mirage/config.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/config.js should pass jshint.\nmirage/config.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
  });
});