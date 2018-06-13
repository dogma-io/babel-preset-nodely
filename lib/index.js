"use strict";

// eslint-disable-line flowtype/no-weak-types
function getPlugins() {
  return ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-optional-chaining', '@babel/plugin-syntax-object-rest-spread'];
} // eslint-disable-next-line


function getPresets(targets) {
  var env = targets ? ['@babel/env', {
    targets: targets
  }] : '@babel/env';
  return [env, '@babel/flow', '@babel/react'];
} // eslint-disable-next-line flowtype/no-weak-types


module.exports = function (api, options) {
  var targets = options && options.targets || null;
  api.cache.never();
  return {
    plugins: getPlugins(),
    presets: getPresets(targets)
  };
};