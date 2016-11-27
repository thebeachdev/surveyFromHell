QUnit.module('JSHint | mirage/scenarios/default.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'mirage/scenarios/default.js should pass jshint.\nmirage/scenarios/default.js: line 1, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n1 error');
});
