import { describe, it, expect } from 'vitest';
import feedMonkeys from './feedMonkeys';

const MONKEYS_LIST = ["🐒", "🦍", "🦧"];
const apple = "🍎";
const banana = "🍌";
const grape = "🍇";
const specialCharacters = "🍉🍇";

describe("feedMonkeys", () => {
  it("should feed monkeys with bananas", () => {
    expect(feedMonkeys(MONKEYS_LIST, banana)).toEqual(["🐒🍌", "🦍🍌", "🦧🍌"]);
  });

  it("should feed monkeys with apples", () => {
    expect(feedMonkeys(MONKEYS_LIST, apple)).toEqual(["🐒🍎", "🦍🍎", "🦧🍎"]);
  });

  it("should feed monkeys with grapes", () => {
    expect(feedMonkeys(MONKEYS_LIST, grape)).toEqual(["🐒🍇", "🦍🍇", "🦧🍇"]);
  });

  it("should return an empty array if no fruit is provided", () => {
    expect(feedMonkeys(MONKEYS_LIST, "")).toEqual([]);
  });

  it("should handle feeding monkeys with special characters", () => {
    expect(feedMonkeys(MONKEYS_LIST, specialCharacters)).toEqual(["🐒🍉🍇", "🦍🍉🍇", "🦧🍉🍇"]);
  });
});
