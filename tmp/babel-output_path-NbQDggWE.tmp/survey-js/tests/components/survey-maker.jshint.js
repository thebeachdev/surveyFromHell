define('survey-js/tests/components/survey-maker.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/survey-maker.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/survey-maker.js should pass jshint.\ncomponents/survey-maker.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/survey-maker.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});