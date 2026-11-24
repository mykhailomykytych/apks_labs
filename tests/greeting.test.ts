import { describe, expect, it } from "vitest";
import { add, helloWorld } from "../src/greeting.js";

describe("BasicAddition", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("helloWorld", () => {
  it("returns a greeting", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
