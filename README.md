# Web3 Units Converter

An intuitive and precise Ethereum converter tool, adept at handling wei, eth, and custom token units, all built on the robust bignumber.js.

## Features
Convert between Ethereum's wei and eth units.
Support for custom token units conversion based on decimals.
Generalized conversion utility for any Ethereum-based units available in the library.

## Installation
```
npm install @web3swag/web3-units-converter
```

## Usage
Import the library:
```
const converter = require('@web3swag/web3-units-converter');
```

## Test
To run test cases
```
npm test
```

## Examples:

#### Convert Eth to Wei
```
const wei = converter.convertEthToWei('1.5'); // returns '1500000000000000000'
```

#### Convert Wei to Eth
```
const eth = converter.convertWeiToEth('1500000000000000000'); // returns '1.5'
```

#### Convert Token to Wei
```
const wei = converter.convertTokenToWei('100', 8); // Assuming the token has 8 decimals, returns 10000000000
```

#### Convert Wei to Token
```
const tokenValue = converter.convertWeiToToken('10000000000', 6); // Assuming the token has 8 decimals, returns 10000
```

#### Convert Between Any Units
```
const gwei = converter.convertAnyToAnyUnits('1', 'eth', 'gwei');
```

##### Note
Always pass the amount as a string to ensure precision.


## Errors
The library is designed to throw errors for unsupported units or if the input amount is not a string.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Authors
- Rajesh Raachabattuni [GitHub](https://www.github.com/oxrajesh) | [Twitter](https://www.twitter.com/oxrajesh) | [Web3Swag](https://web3swag.xyz)
- Swastik Mishra [GitHub](https://github.com/swastikmishra)

## Licence:
MIT License