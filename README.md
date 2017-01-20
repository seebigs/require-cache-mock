# require-cache-mock

> Requiring this package will allow you to mock modules from anywhere in your node project

Combine this feature with [bundl-pack](https://github.com/seebigs/bundl-pack) to get the same results in a browser

Uses [mock-require](https://github.com/boblauer/mock-require) under the hood to facilitate mocking

*Note: Using this package modifies your global require*

## Install

```
$ npm install require-cache-mock
```

## Use

*Where `replacement` is an object or function to return in place of the original module:*

```js
require.cache.mock('./module.js', replacement);
```

## Example

```js
require('require-cache-mock');

var entry = require('./entry.js');

entry.init();

// two is mocked
```

entry.js
```js
require.cache.mock('./two.js', { type: 'mocked' });

function init () {
    var one = require('./one.js');
    console.log('two is ' + one.twoType);
}

module.exports = { init: init };
```

one.js
```js
var two = require('./two.js');

module.exports = {
    twoType: two.type
};
```

two.js
```js
module.exports = {
    type: 'real'
};
```

## Stop Mocking

```js
require.cache.mock.stopAll();
```

## Additional Options

See [mock-require](https://github.com/boblauer/mock-require) for more details

```js
require.cache.mock === require('mock-require');
```
