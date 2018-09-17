# babel-preset-nodely [![NPM][npm-img]][npm-url] [![Coverage][cov-img]][cov-url]

Babel preset used by [nodely](https://github.com/dogma-io/nodely).

## Table of Contents

*   [Installation](#installation)
*   [Documentation](#documentation)
*   [Code of Conduct](#code-of-conduct)
*   [Contributing](#contributing)
*   [License](#license)

## Installation

**npm**

```bash
npm install babel-preset-nodely
```

**yarn**

```bash
yarn add babel-preset-nodely
```

## Documentation

To use this preset simply include it in your Babel configuration for example:

*.babelrc*

```json
{
  "presets": ["nodely"]
}
```

### Loose mode

By default this preset will enable loose mode but you can turn it off like so:

```json
{
  "presets": [
    [
      "nodely",
      {
        "loose": false
      }
    ]
  ]
}
```

### Targets

Your build can target a specific minimum Node version:

```json
{
  "presets": [
    [
      "nodely",
      {
        "targets": {
          "node": 8
        }
      }
    ]
  ]
}
```

Your build can also target certain browser support:

```json
{
  "presets": [
    [
      "nodely",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie10"],
        }
      }
    ]
  ]
}
```

## Code of Conduct

Please see the [code of conduct](CODE_OF_CONDUCT.md).

## Contributing

Please see the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE.md)

[cov-img]: https://img.shields.io/codecov/c/github/dogma-io/babel-preset-nodely.svg "Code Coverage"
[cov-url]: https://codecov.io/gh/dogma-io/babel-preset-nodely

[npm-img]: https://img.shields.io/npm/v/babel-preset-nodely.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/babel-preset-nodely
