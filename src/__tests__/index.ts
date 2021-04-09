import {expect} from "chai"
import {head} from ".."

describe("head", () => {
  it("return the first value of a non-empty array", () => {
    expect(head([1, 2, 3])).to.equal(1)
  })
})
