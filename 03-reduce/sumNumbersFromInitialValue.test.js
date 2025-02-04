//Implement saem test defined in 00-imperative/sumNumbersFromInitialValue.test.js
import { describe, it, expect } from 'vitest';
import sumNumbersFromInitialValue from './sumNumbersFromInitialValue';

const EMPTY_NUMBERS_LIST = [];
const POSITIVE_NUMBERS_LIST = [1, 2, 3, 4, 5];
const NEGATIVE_NUMBERS_LIST = [-1, -2, -3, -4, -5];
const MIXED_NUMBERS_LIST = [1, -2, 3, -4, 5];

const initialAccumulatedValueAsZero = 0;
const initialAccumulatedValueAsTen = 10;
const initialAccumulatedValueAsOneHundred = 100;

describe("sumNumbersFromInitialValue", () => {
  it("should return the correct sum with initial value 0", () => {
    expect(sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsZero)).toBe(15);
  });

  it("should return the correct sum with initial value 10", () => {
    expect(sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsTen)).toBe(25);
  });

  it("should return the initial value if the list is empty", () => {
    expect(sumNumbersFromInitialValue(EMPTY_NUMBERS_LIST, initialAccumulatedValueAsTen)).toBe(10);
  });

  it("should handle negative numbers in the list", () => {
    expect(sumNumbersFromInitialValue(NEGATIVE_NUMBERS_LIST, initialAccumulatedValueAsZero)).toBe(-15);
  });

  it("should handle a mix of positive and negative numbers", () => {
    expect(sumNumbersFromInitialValue(MIXED_NUMBERS_LIST, initialAccumulatedValueAsZero)).toBe(3);
  });

  it("should handle an initial value of 0", () => {
    expect(sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsZero)).toBe(15);
  });

  it("should handle an initial value of 100", () => {
    expect(sumNumbersFromInitialValue(POSITIVE_NUMBERS_LIST, initialAccumulatedValueAsOneHundred)).toBe(115);
  });
});
