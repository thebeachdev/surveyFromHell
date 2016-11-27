define('survey-js/tests/helpers/resolver', ['exports', 'survey-js/resolver', 'survey-js/config/environment'], function (exports, _surveyJsResolver, _surveyJsConfigEnvironment) {

  var resolver = _surveyJsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _surveyJsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _surveyJsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});