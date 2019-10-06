# range-converter

Simple range converter

## Installation

```sh
npm i range-converter
```

## Usage

```js
const convert = require('range-converter');

convert([1,3,4,5,6,7,8]).then((res) => {
  console.log(res) // '1,3-8'
})
```

## Tests

```sh
$ npm run test
```

## Coverage

```sh
$ npm run coverage
```

Open in your browser file: './coverage/index.html'...

## Check code style

```sh
$ npm run lint
```

## License

MIT.