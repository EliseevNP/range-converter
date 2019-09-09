# Simple range converter

## Install
```sh
npm install range-converter
```

## Usage
```
const convert = require('range-converter');

convert([1,3,4,5,6,7,8]).then((res) => {
  console.log(res) // '1,3-8'
})
```

## Tests
```sh
$ npm run test
```