define('survey-js/app', ['exports', 'ember', 'survey-js/resolver', 'ember-load-initializers', 'survey-js/config/environment'], function (exports, _ember, _surveyJsResolver, _emberLoadInitializers, _surveyJsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _surveyJsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _surveyJsConfigEnvironment['default'].podModulePrefix,
    Resolver: _surveyJsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _surveyJsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});