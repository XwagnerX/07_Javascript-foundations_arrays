import { describe, it, expect } from 'vitest';
import capitalizeMates from './capitalizeNames';

const NAMES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const EMPTY_NAMES_LIST = [];
const CAPITALIZED_NAMES = ["John", "Jacob", "Jingleheimer", "Schmidt"];
const UPPERCASED_NAMES = ["JOHN", "JACOB", "JINGLEHEIMER", "SCHMIDT"];
const LOWERCASED_NAMES = ["john", "jacob", "jingleheimer", "schmidt"];
const MIXED_CAPITALIZED_NAMES = ["jOhN", "JaCoB", "jInGlEhEiMeR", "sChMiDt"];

describe("capitalizeMates", () => {
  it("should capitalize all names in the array", () => {
    expect(capitalizeMates(NAMES)).toEqual(CAPITALIZED_NAMES);
  });

  it("should handle an empty array", () => {
    expect(capitalizeMates(EMPTY_NAMES_LIST)).toEqual([]);
  });

  it("should handle names that are already capitalized correctly", () => {
    expect(capitalizeMates(CAPITALIZED_NAMES)).toEqual(CAPITALIZED_NAMES);
  });

  it("should handle names that are all uppercase", () => {
    expect(capitalizeMates(UPPERCASED_NAMES)).toEqual(CAPITALIZED_NAMES);
  });

  it("should handle names that are all lowercase", () => {
    expect(capitalizeMates(LOWERCASED_NAMES)).toEqual(CAPITALIZED_NAMES);
  });

  it("should handle names with mixed casing", () => {
    expect(capitalizeMates(MIXED_CAPITALIZED_NAMES)).toEqual(CAPITALIZED_NAMES);
  });
});
