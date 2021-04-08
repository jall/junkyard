import {expect} from "chai"
import {head} from ".."

describe("blah", () => {
  it("works", () => {
    expect(head([1, 2, 3])).to.equal(1)
  })
})
