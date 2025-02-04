import { describe, it, expect } from 'vitest';
import extractVipsNames from './extractVipsNames';

const EMPTY_VIPS_LIST = [];
const SINGLE_VIP_LIST = [{ name: "Foo", age: 80 }];
const VIPS = [
  { name: "Foo", age: 80 },
  { name: "Bar", age: 2 },
  { name: "Fizz", age: 5 },
  { name: "Buzz", age: 16 },
  { name: "FizzBuzz", age: 100 },
];

describe("extractVipsNames", () => {
  it("should extract names from VIPS array", () => {
    expect(extractVipsNames(VIPS)).toEqual(["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"]);
  });

  it("should handle an empty array", () => {
    expect(extractVipsNames(EMPTY_VIPS_LIST)).toEqual([]);
  });

  it("should handle an array with one VIP", () => {
    expect(extractVipsNames(SINGLE_VIP_LIST)).toEqual(["Foo"]);
  });

  it("should only extract the name property", () => {
    const result = extractVipsNames(VIPS);
    result.forEach(name => {
      expect(typeof name).toBe("string");
    });
  });

  it("should preserve the order of names", () => {
    const result = extractVipsNames(VIPS);
    VIPS.forEach((vip, index) => {
      expect(result[index]).toBe(vip.name);
    });
  });
});
