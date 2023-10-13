import chai from 'chai';
import converter from '../dist/index';
const expect = chai.expect;

describe('ETH Conversion Library', function () {

  describe('convertEthToWei:: ETH to WEI', function () {

    it('convert 1 ETH to  1000000000000000000 wei', function () {
      let result = converter.convertEthToWei('1');
      expect(result).to.equal('1000000000000000000');
    });

    it('convert 0.1 ETH to 100000000000000000 wei', function () {
      let result = converter.convertEthToWei('0.1');
      expect(result).to.equal('100000000000000000');
    });

    it('convert 0.01 ETH to 10000000000000000 wei', function () {
      let result = converter.convertEthToWei('0.01');
      expect(result).to.equal('10000000000000000');
    });

    it('convert 0.00000001 ETH to 10000000000 wei', function () {
      let result = converter.convertEthToWei('0.00000001');
      expect(result).to.equal('10000000000');
    });

    it('convert 0.0000000000000001 ETH to 100 wei', function () {
      let result = converter.convertEthToWei('0.0000000000000001');
      expect(result).to.equal('100');
    });

    it('convert 0.000000000000000001 ETH to 1 wei', function () {
      let result = converter.convertEthToWei('0.000000000000000001');
      expect(result).to.equal('1');

    });

  });

  describe('convertWeiToEth:: WEI to ETH', function () {

    it('convert 1000000000000000000 wei to  1 ETH', function () {
      let result = converter.convertWeiToEth('1000000000000000000');
      expect(result).to.equal('1');
    });

    it('convert 100000000000000000 wei to 0.1 ETH', function () {
      let result = converter.convertWeiToEth('100000000000000000');
      expect(result).to.equal('0.1');
    });

    it('convert 10000000000000000 wei to 0.01 ETH', function () {
      let result = converter.convertWeiToEth('10000000000000000');
      expect(result).to.equal('0.01');
    });

    it('convert 10000000000 wei to 0.00000001 ETH', function () {
      let result = converter.convertWeiToEth('10000000000');
      expect(result).to.equal('0.00000001');
    });

    it('convert 100 wei to 0.0000000000000001 ETH', function () {
      let result = converter.convertWeiToEth('100');
      expect(result).to.equal('0.0000000000000001');
    });

    it('convert 1 wei to 0.000000000000000001 ETH', function () {
      let result = converter.convertWeiToEth('1');
      expect(result).to.equal('0.000000000000000001');
    });

  });

  describe('convertTokenToWei:: Token to WEI', function () {

    it('convert 1 token with 18 decimals to wei, should return 1000000000000000000', function () {
      let result = converter.convertTokenToWei('1', '18');
      expect(result).to.equal('1000000000000000000');
    });

    it('convert 1 token with 8 decimals to wei, should return 100000000', function () {
      let result = converter.convertTokenToWei('1', '8');
      expect(result).to.equal('100000000');
    });

    it('convert 1 token with 6 decimals to wei, should return 1000000', function () {
      let result = converter.convertTokenToWei('1', '6');
      expect(result).to.equal('1000000');
    });

    it('convert 0.5 token with 6 decimals to wei, should return 500000', function () {
      let result = converter.convertTokenToWei('0.5', '6');
      expect(result).to.equal('500000');
    });

    it('convert 0.0005 token with 6 decimals to wei, should return 500', function () {
      let result = converter.convertTokenToWei('0.0005', '6');
      expect(result).to.equal('500');
    });

    it('convert 0.01 token with 2 decimals to wei, should return 1', function () {
      let result = converter.convertTokenToWei('0.01', '2');
      expect(result).to.equal('1');
    });

  });

  describe('convertWeiToToken:: WEI to Token', function () {

    it('convert 1000000000000000000 wei to token with 18 decimals, should return 1', function () {
      let result = converter.convertWeiToToken('1000000000000000000', '18');
      expect(result).to.equal('1');
    });

    it('convert 100000000 wei to token with 8 decimals, should return 1', function () {
      let result = converter.convertWeiToToken('100000000', '8');
      expect(result).to.equal('1');
    });

    it('convert 1000000 wei to token with 6 decimals, should return 1', function () {
      let result = converter.convertWeiToToken('1000000', '6');
      expect(result).to.equal('1');
    });

    it('convert 500000 wei to token with 6 decimals, should return 0.5', function () {
      let result = converter.convertWeiToToken('500000', '6');
      expect(result).to.equal('0.5');
    });

    it('convert 1 wei to token with 2 decimals, should return 0.01', function () {
      let result = converter.convertWeiToToken('1', '2');
      expect(result).to.equal('0.01');
    });

  });

  describe('convertAnyToAnyUnits:: Any unit to Any unit conversion', function () {

    it('convert 1 ETH to 1000000000 Gwei', function () {
      let result = converter.convertAnyToAnyUnits('1', 'eth', 'gwei');
      expect(result).to.equal('1000000000');
    });

    it('convert 1 Gwei to 1000000000 Wei', function () {
      let result = converter.convertAnyToAnyUnits('1', 'gwei', 'wei');
      expect(result).to.equal('1000000000');
    });

    it('convert 0.5 ETH to 500000000000000000 Wei', function () {
      let result = converter.convertAnyToAnyUnits('0.5', 'eth', 'wei');
      expect(result).to.equal('500000000000000000');
    });

  });
});