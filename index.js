const BigNumber = require('bignumber.js');

var Units = require('./units.json')
var units = {}

Object.keys(Units).map(function (unit) {
    units[unit] = new BigNumber(Units[unit], 10)
})

module.exports = {
    convertEthToWei: function (amount) {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        let factor = new BigNumber('1'.padEnd(19, '0'));
        let bigNumberAmount = new BigNumber(amount).times(factor);
        return bigNumberAmount.toString(10);
    },

    convertWeiToEth: function (amount) {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        let factor = new BigNumber('1'.padEnd(19, '0'));
        let bigNumberAmount = new BigNumber(amount).dividedBy(factor);
        return bigNumberAmount.toString(10);
    },

    convertTokenToWei: function (amount, decimals) {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        let factor = new BigNumber('1'.padEnd(decimals + 1, '0'));
        let bigNumberAmount = new BigNumber(amount).times(factor);
        return bigNumberAmount.toString(10);
    },

    convertWeiToToken: function (amount, decimals) {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        let factor = new BigNumber('1'.padEnd(decimals + 1, '0'));
        let bigNumberAmount = new BigNumber(amount).dividedBy(factor);
        return bigNumberAmount.toString(10);
    },

    convertAnyToAnyUnits: function (amount, fromUnit, toUnit) {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }

        if (!units[fromUnit] || !units[toUnit]) {
            throw new Error('Unsupported unit provided');
        }

        const conversionFactor = new BigNumber(units[fromUnit]).dividedBy(units[toUnit]);
        const convertedAmount = new BigNumber(amount).times(conversionFactor);
        return convertedAmount.toString(10);
    }
};