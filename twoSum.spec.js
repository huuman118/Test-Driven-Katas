const { expect } = require('chai')
const twoSum = require('./twoSum')

describe('two sum tests', () => {
  it('Returns empty array if empty array is provided', () => {
    expect(twoSum([], 10)).to.deep.equal([])
  })
  it('Returns empty array if array has one element', () => {
    expect(twoSum([1], 10)).to.deep.equal([])
  })
  it('Returns first instance where digits equal target', () => {
    expect(twoSum([1, 9, 1, 0, 5, 5], 10)).to.deep.equal([0, 1])
  })
  it('Returns indexes that are not the same', () => {
    expect(twoSum([1, 5, 5], 10)).to.deep.equal([1, 2])
  })
})
