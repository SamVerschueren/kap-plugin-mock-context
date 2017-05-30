# kap-plugin-mock-context [![Build Status](https://travis-ci.org/SamVerschueren/kap-plugin-mock-context.svg?branch=master)](https://travis-ci.org/SamVerschueren/kap-plugin-mock-context)

> [Kap](https://github.com/wulkano/kap) plugin mock context


## Install

```
$ npm install --save-dev kap-plugin-mock-context
```


## Usage

```js
const context = require('kap-plugin-mock-context');

const ctx = context({
	file: 'Kapture 2017-05-30 at 1.03.49.gif',
	config: {
		apiKey: 'a3b78f9ce6'
	}
});
```


## API

### context(options)

Returns a mock context object.

#### options

Type: `object`

##### file

Type: `string`

Path to the file that is being processed.

##### config

Type: `object`<br>
Default: `{}`

Plugin configuration object.


## Related

- [kap-plugin-test](https://github.com/SamVerschueren/kap-plugin-test) - Test your [Kap](https://github.com/wulkano/kap) plugins


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
