const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('')
  })
  it('Returns string if less than maxLen', () => {
    expect(wrap('Hello World', 15)).to.equal('Hello World')
  })
  it('Returns string that wraps', () => {
    expect(wrap('Hello World', 5)).to.equal('Hello\nWorld')
  })
  it('Returns string that wraps with large strings', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    )
  })
})
