"use strict";

var _freezly = require("freezly");

// eslint-disable-line flowtype/no-weak-types
const NODE_TARGETS = (0, _freezly.deepFreeze)({
  node: '6'
});
const WEB_TARGETS = (0, _freezly.deepFreeze)({
  browsers: ['last 2 versions', 'ie 10']
});

function getPlugins() {
  return ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-object-rest-spread'];
}

function getPresets(env) {
  return [['@babel/env', {
    targets: env === 'web' ? WEB_TARGETS : NODE_TARGETS
  }], '@babel/flow', '@babel/react'];
} // eslint-disable-next-line flowtype/no-weak-types


module.exports = function (api, options) {
  const env = options && options.env || 'node';
  api.cache.never();
  return {
    plugins: getPlugins(),
    presets: getPresets(env)
  };
};