define('survey-js/tests/test-helper', ['exports', 'survey-js/tests/helpers/resolver', 'ember-qunit'], function (exports, _surveyJsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_surveyJsTestsHelpersResolver['default']);
});