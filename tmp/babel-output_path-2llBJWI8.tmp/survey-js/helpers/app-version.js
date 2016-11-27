define('survey-js/helpers/app-version', ['exports', 'ember', 'survey-js/config/environment'], function (exports, _ember, _surveyJsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _surveyJsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});