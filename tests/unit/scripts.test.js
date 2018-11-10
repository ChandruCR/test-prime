const scripts = require("./../../js/scripts")

describe("this is a test suite for validate function", function() {
  test("validate method can be called", function() {
    expect(scripts.validate(10))
  })

  test("validate method returns something", function() {
    expect(scripts.validate(10)).toBeDefined()
  })

  test("validate method returns true when value passes is greater than 1", function() {
    expect(scripts.validate(2)).toBe(true)
  })

  test("validate method returns false when value passed is 1", function() {
    expect(scripts.validate(1)).toBe(false)
  })

  test("validate method returns false when value passed is 0", function() {
    expect(scripts.validate(0)).toBe(false)
  })

  test("validate method returns false when value passed is negative", function() {
    expect(scripts.validate(-1)).toBe(false)
  })
})
