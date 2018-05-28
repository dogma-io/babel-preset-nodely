/**
 * @flow
 */

import {deepFreeze} from 'freezly'

type Environment = 'node' | 'web'

type Options = {|
  env?: Environment,
|}

type Plugin = string
type Preset = string | [string, Object] // eslint-disable-line flowtype/no-weak-types

const NODE_TARGETS = deepFreeze({
  node: '6',
})

const WEB_TARGETS = deepFreeze({
  browsers: ['last 2 versions', 'ie 10'],
})

function getPlugins(): Array<Plugin> {
  return [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-object-rest-spread',
  ]
}

function getPresets(env: Environment): Array<Preset> {
  return [
    [
      '@babel/env',
      {
        targets: env === 'web' ? WEB_TARGETS : NODE_TARGETS,
      },
    ],
    '@babel/flow',
    '@babel/react',
  ]
}

// eslint-disable-next-line flowtype/no-weak-types
module.exports = function(api: any, options: ?Options): Object {
  const env = (options && options.env) || 'node'

  api.cache.never()

  return {
    plugins: getPlugins(),
    presets: getPresets(env),
  }
}
