import { describe, test, it, expect } from "vitest";

import { max, fizzBuzz, factorial } from "../src/intro";

// "describe" is used to create a test suite or a group of related tests

describe("max", () => {
  it("returns the first arg if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("returns the second arg if it is greater", () => {
    expect(max(2, 5)).toBe(5);
  });

  it("returns the first arg if args are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("returns FizzBuzz if arg is divisible by 3 & 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("returns Fizz if arg is divisible by 3 only", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("returns buzz if arg is divisible by 5 only", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("returns string arg if arg is not divisible by 3 & 5", () => {
    expect(fizzBuzz(8)).toBe("8");
  });
});

describe("factorial", () => {
  it("returns the factorial of a given number", () => {
    expect(factorial(4)).toBe(24);
  });
});
