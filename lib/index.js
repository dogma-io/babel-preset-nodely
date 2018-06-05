"use strict";

// eslint-disable-line flowtype/no-weak-types
function getPlugins() {
  return ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-object-rest-spread'];
} // eslint-disable-next-line


function getPresets(targets) {
  const env = targets ? ['@babel/env', {
    targets
  }] : '@babel/env';
  return [env, '@babel/flow', '@babel/react'];
} // eslint-disable-next-line flowtype/no-weak-types


module.exports = function (api, options) {
  const targets = options && options.targets || null;
  api.cache.never();
  return {
    plugins: getPlugins(),
    presets: getPresets(targets)
  };
};