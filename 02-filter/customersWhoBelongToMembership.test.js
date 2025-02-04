import { describe, it, expect } from 'vitest';
import customersWhoBelongToMembership from './customersWhoBelongToMembership';

const EMPTY_CUSTOMERS_LIST = [];

const CUSTOMERS_LIST = [
  { name: "Foo", isMember: true },
  { name: "Bar", isMember: false },
  { name: "Fizz", isMember: true },
  { name: "Buzz", isMember: false },
  { name: "FizzBuzz", isMember: true },
];

const CUSTOMERS_LIST_WITH_NO_MEMBERS = [
  { name: "Bar", isMember: false },
  { name: "Buzz", isMember: false },
];

const CUSTOMERS_LIST_WITH_ALL_MEMBERS = [
  { name: "Foo", isMember: true },
  { name: "Fizz", isMember: true },
  { name: "FizzBuzz", isMember: true },
];

describe("customersWhoBelongToMembership", () => {
  it("should return only customers who are members", () => {
    const result = customersWhoBelongToMembership(CUSTOMERS_LIST);
    expect(result).toEqual([
      { name: "Foo", isMember: true },
      { name: "Fizz", isMember: true },
      { name: "FizzBuzz", isMember: true },
    ]);
  });

  it("should handle an empty array", () => {
    expect(customersWhoBelongToMembership(EMPTY_CUSTOMERS_LIST)).toEqual([]);
  });

  it("should handle an array with no members", () => {
    expect(customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_NO_MEMBERS)).toEqual([]);
  });

  it("should handle an array with all members", () => {
    expect(customersWhoBelongToMembership(CUSTOMERS_LIST_WITH_ALL_MEMBERS)).toEqual(CUSTOMERS_LIST_WITH_ALL_MEMBERS);
  });

  it("should not modify the original array", () => {
    const originalList = [...CUSTOMERS_LIST];
    customersWhoBelongToMembership(CUSTOMERS_LIST);
    expect(CUSTOMERS_LIST).toEqual(originalList);
  });
  });
