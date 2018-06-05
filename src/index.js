/**
 * @flow
 */

type Options = {|
  targets?: Object, // eslint-disable-line
|}

type Plugin = string
type Preset = string | [string, Object] // eslint-disable-line flowtype/no-weak-types

function getPlugins(): Array<Plugin> {
  return [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-object-rest-spread',
  ]
}

// eslint-disable-next-line
function getPresets(targets: ?Object): Array<Preset> {
  const env = targets ? ['@babel/env', {targets}] : '@babel/env'

  return [env, '@babel/flow', '@babel/react']
}

// eslint-disable-next-line flowtype/no-weak-types
module.exports = function(api: any, options: ?Options): Object {
  const targets = (options && options.targets) || null

  api.cache.never()

  return {
    plugins: getPlugins(),
    presets: getPresets(targets),
  }
}
