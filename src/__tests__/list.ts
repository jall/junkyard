import {expect} from "chai"
import {head, tail} from "../list"

describe("head", () => {
  it("returns the first value of a non-empty array", () => {
    expect(head([1, 2, 3])).to.equal(1)
  })

  it("return undefined when the array has no values", () => {
    expect(head([])).to.be.undefined
  })
})

describe("tail", () => {
  it("return empty array when the array has no values", () => {
    expect(tail([])).to.eql([])
  })

  it("return empty array when the array has only one value", () => {
    expect(tail([1])).to.eql([])
  })

  it("returns all values of an array except the first", () => {
    expect(tail([1, 2, 3, 4, 5])).to.eql([2, 3, 4, 5])
    expect(tail(["a", 2, true, 4e3, {foo: "bar"}])).to.eql([
      2,
      true,
      4e3,
      {foo: "bar"},
    ])
  })
})
