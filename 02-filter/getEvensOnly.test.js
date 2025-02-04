import { describe, it, expect } from 'vitest';
import getEvensOnly from './getEvensOnly';

const NUMBERS = [2, 25, 43, 12, 67, 42, 28];
const EMPTY_NUMBERS_LIST = [];
const NUMBERS_LIST_WITHOUT_EVEN_VALUES = [1, 3, 5, 7, 9];
const NUMBERS_LIST_WITH_ALL_EVEN_VALUES = [2, 4, 6, 8, 10];
const NUMBERS_LIST_WITH_NEGATIVE_VALUES = [-2, -4, -6, -8, -10];
const NUMBERS_LIST_WITH_MIXED_VALUES = [-1, 4, -6, 8, -10];

const EMPTY_NUMBERS_ARRAY = [];
const NUMBERS_WITH_NO_EVENS = [1, 3, 5, 7, 9];
const NUMBERS_WITH_ALL_EVENS = [2, 4, 6, 8, 10];
const MIXED_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const NEGATIVE_AND_POSITIVE_NUMBERS = [-2, -1, 0, 1, 2];

describe("getEvensOnly", () => {
  it("should return only even numbers", () => {
    const result = getEvensOnly(MIXED_NUMBERS);
    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  it("should handle an empty array", () => {
    const result = getEvensOnly(EMPTY_NUMBERS_ARRAY);
    expect(result).toEqual([]);
  });

  it("should handle an array with no even numbers", () => {
    const result = getEvensOnly(NUMBERS_WITH_NO_EVENS);
    expect(result).toEqual([]);
  });

  it("should handle an array with all even numbers", () => {
    const result = getEvensOnly(NUMBERS_WITH_ALL_EVENS);
    expect(result).toEqual(NUMBERS_WITH_ALL_EVENS);
  });

  it("should handle negative and zero numbers", () => {
    const result = getEvensOnly(NEGATIVE_AND_POSITIVE_NUMBERS);
    expect(result).toEqual([-2, 0, 2]);
  });
});
