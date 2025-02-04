import { describe, it, expect } from 'vitest';
import transformSecondsToWords from './transformSecondsToWords';

const SECONDS = [2, 5, 100];
const EMPTY_SECONDS_LIST = [];
const SINGLE_SECOND_LIST = [42];
const SINGLE_SECONDS_LIST_WITH_VALUE_ZERO = [0];
const SECONDS_LIST_WITH_NEGATIVE_VALUES = [-1, -60, -3600];

describe("transformSecondsToWords", () => {
  it("should transform an array of seconds to an array of strings", () => {
    expect(transformSecondsToWords(SECONDS)).toEqual(["2", "5", "100"]);
  });

  it("should handle an empty array", () => {
    expect(transformSecondsToWords(EMPTY_SECONDS_LIST)).toEqual([]);
  });

  it("should handle an array with one element", () => {
    expect(transformSecondsToWords(SINGLE_SECOND_LIST)).toEqual(["42"]);
  });

  it("should handle an array with zero", () => {
    expect(transformSecondsToWords(SINGLE_SECONDS_LIST_WITH_VALUE_ZERO)).toEqual(["0"]);
  });

  it("should handle an array with negative numbers", () => {
    expect(transformSecondsToWords(SECONDS_LIST_WITH_NEGATIVE_VALUES)).toEqual(["-1", "-60", "-3600"]);
  });
});
