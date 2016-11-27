define('survey-js/tests/helpers/start-app', ['exports', 'ember', 'survey-js/app', 'survey-js/config/environment'], function (exports, _ember, _surveyJsApp, _surveyJsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _surveyJsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _surveyJsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});