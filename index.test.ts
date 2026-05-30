import { slugify, truncate, capitalize, randomId, clamp } from "./index.js"

describe("slugify", () => {
  it("converts spaces to hyphens", () => expect(slugify("Hello World")).toBe("hello-world"))
  it("removes special chars", () => expect(slugify("Hello, World!")).toBe("hello-world"))
  it("trims whitespace", () => expect(slugify("  hello  ")).toBe("hello"))
})

describe("truncate", () => {
  it("truncates long strings", () => expect(truncate("Hello World", 8)).toBe("Hello..."))
  it("leaves short strings alone", () => expect(truncate("Hi", 10)).toBe("Hi"))
})

describe("capitalize", () => {
  it("capitalizes first letter", () => expect(capitalize("hello")).toBe("Hello"))
  it("lowercases the rest", () => expect(capitalize("hELLO")).toBe("Hello"))
  it("handles empty string", () => expect(capitalize("")).toBe(""))
})

describe("randomId", () => {
  it("returns correct length", () => expect(randomId(8)).toHaveLength(8))
  it("returns different values", () => expect(randomId()).not.toBe(randomId()))
})

describe("clamp", () => {
  it("clamps above max", () => expect(clamp(10, 0, 5)).toBe(5))
  it("clamps below min", () => expect(clamp(-1, 0, 5)).toBe(0))
  it("leaves value in range", () => expect(clamp(3, 0, 5)).toBe(3))
})
