import {expect} from "chai"
import {filter, map, pipeT, toArray} from "../transducers"

describe("transducers", () => {
  it("combining multiple transducers works", () => {
    const inc = (num: number) => num + 1
    const isEven = (num: number): num is number => num % 2 === 0

    const xform = pipeT(map(inc), filter(isEven))
    const transform = toArray(xform)

    expect(transform([1, 2, 3])).to.eql([2, 4])
  })
})
