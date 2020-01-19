/**
 * @flow
 */

type Options = {|
  loose?: boolean,
  targets?: Object, // eslint-disable-line
|}

type Plugin = string
type Preset = string | [string, Object] // eslint-disable-line flowtype/no-weak-types

function getPlugins(): Array<Plugin> {
  return [
    '@babel/plugin-proposal-class-properties',
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
    plugins: getPlugins(),
    presets: getPresets(options || {loose: true}),
  }
}
