/**
 * @flow
 */

type Options = {|
  loose?: boolean,
  targets?: Object, // eslint-disable-line
|}

type Plugin = string | Array<string | Object> // eslint-disable-line flowtype/no-weak-types
type Preset = string | [string, Object] // eslint-disable-line flowtype/no-weak-types

function getPlugins(options: Options): Array<Plugin> {
  const loose = typeof options.loose === 'boolean' ? options.loose : true

  return [
    ['@babel/plugin-proposal-class-properties', {loose}],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-object-rest-spread',
  ]
}

function getPresets(options: Options): Array<Preset> {
  const envOptions: Options = {
    loose: typeof options.loose === 'boolean' ? options.loose : true,
  }

  if (options.targets) {
    envOptions.targets = options.targets
  }

  return [['@babel/env', envOptions], '@babel/flow', '@babel/react']
}

// eslint-disable-next-line flowtype/no-weak-types
module.exports = function(api: any, options: ?Options): Object {
  api.cache.never()

  return {
    plugins: getPlugins(options || {loose: true}),
    presets: getPresets(options || {loose: true}),
  }
}
