const chai = require('chai');

const { assert, expect } = chai;

const EnergyEfficiencyClass = require('../services/energy-efficiency-class');

describe('Energy efficience class calculator', () => {
  describe('#calculateCo2RefValue()', () => {
    it('should return a number if vehicle weight is a positive number', () => {
      const co2RefValue = EnergyEfficiencyClass.calculateCo2RefValue(1000);

      expect(co2RefValue).to.be.a('number');
    });

    it('should throw a TypeError if vehicle weight is not a number', () => {
      const func = EnergyEfficiencyClass.calculateCo2RefValue.bind(null, 'notANumber');

      expect(func).to.throw(TypeError);
    });

    it('should throw a RangeError if vehicle weight is less or equal to zero', () => {
      const func = EnergyEfficiencyClass.calculateCo2RefValue.bind(null, -10);

      expect(func).to.throw(RangeError);
    });

    it('should calculate the result properly', () => {
      const actual = EnergyEfficiencyClass.calculateCo2RefValue(2000);
      const expected = 216.331;

      assert.equal(actual, expected);
    });

    it('should calculate the result properly', () => {
      const actual = EnergyEfficiencyClass.calculateCo2RefValue(3800);
      const expected = 378.097;

      assert.equal(actual, expected);
    });
  });

  describe('#calculateDeviation()', () => {
    it('should return a number if both parameters are valid', () => {
      const co2RefValue = EnergyEfficiencyClass.calculateDeviation(130.123, 216.654);

      expect(co2RefValue).to.be.a('number');
    });

    it('should throw a TypeError if the CO2 value is not a number', () => {
      const func = EnergyEfficiencyClass.calculateDeviation.bind(null, 'notANumber', 100);

      expect(func).to.throw(TypeError);
    });

    it('should throw a RangeError if CO2 value is less or equal to zero', () => {
      const func = EnergyEfficiencyClass.calculateDeviation.bind(null, 0, 87);

      expect(func).to.throw(RangeError);
    });

    it('should throw a TypeError if the CO2 ref value is not a number', () => {
      const func = EnergyEfficiencyClass.calculateDeviation.bind(null, 304, false);

      expect(func).to.throw(TypeError);
    });

    it('should throw a RangeError if CO2 ref value is less or equal to zero', () => {
      const func = EnergyEfficiencyClass.calculateDeviation.bind(null, 102, -69);

      expect(func).to.throw(RangeError);
    });

    it('should calculate the result properly', () => {
      const actual = EnergyEfficiencyClass.calculateDeviation(89, 198.357);
      const expected = 55.131;

      assert.equal(actual, expected);
    });

    it('should calculate the result properly', () => {
      const actual = EnergyEfficiencyClass.calculateDeviation(120, 306.201);
      const expected = 60.81;

      assert.equal(actual, expected);
    });
  });
});
