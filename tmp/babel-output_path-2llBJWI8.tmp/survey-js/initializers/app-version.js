define('survey-js/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'survey-js/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _surveyJsConfigEnvironment) {
  var _config$APP = _surveyJsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});