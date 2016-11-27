define('survey-js/router', ['exports', 'ember', 'survey-js/config/environment'], function (exports, _ember, _surveyJsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _surveyJsConfigEnvironment['default'].locationType,
    rootURL: _surveyJsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});