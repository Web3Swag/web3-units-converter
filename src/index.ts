import BigNumber from 'bignumber.js';
import UnitsData from './units.json';

interface UnitsDataInterface {
    [key: string]: string;
}

const Units: UnitsDataInterface = UnitsData;

interface UnitsInterface {
    [key: string]: BigNumber;
}

const units: UnitsInterface = {};

Object.keys(Units).forEach((unit: string) => {
    units[unit] = new BigNumber(Units[unit], 10);
});

export default {
    convertEthToWei: (amount: string): string => {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        const factor = new BigNumber('1'.padEnd(19, '0'));
        const bigNumberAmount = new BigNumber(amount).times(factor);
        return bigNumberAmount.toString(10);
    },

    convertWeiToEth: (amount: string): string => {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        const factor = new BigNumber('1'.padEnd(19, '0'));
        const bigNumberAmount = new BigNumber(amount).dividedBy(factor);
        return bigNumberAmount.toString(10);
    },

    convertTokenToWei: (amount: string, decimals: string): string => {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        const factor = new BigNumber('1'.padEnd(parseInt(decimals) + 1, '0'));
        const bigNumberAmount = new BigNumber(amount).times(factor);
        return bigNumberAmount.toString(10);
    },

    convertWeiToToken: (amount: string, decimals: string): string => {
        if (typeof amount !== 'string') {
            throw new Error('Amount must be a string to prevent precision errors');
        }
        const factor = new BigNumber('1'.padEnd(parseInt(decimals) + 1, '0'));
        const bigNumberAmount = new BigNumber(amount).dividedBy(factor);
        return bigNumberAmount.toString(10);
    },

    convertAnyToAnyUnits: (amount: string, fromUnit: string, toUnit: string): string => {
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