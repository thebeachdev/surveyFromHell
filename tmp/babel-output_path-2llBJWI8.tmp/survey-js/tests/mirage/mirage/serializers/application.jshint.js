define('survey-js/tests/mirage/mirage/serializers/application.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/serializers/application.js should pass jshint.\nmirage/serializers/application.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmirage/serializers/application.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});