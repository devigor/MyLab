import { expect } from 'chai'
import { FizzBuzz } from '../src/main'

describe('FizzBuzz', () => {
  it('should return Fizz when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz')
    expect(FizzBuzz(6)).to.be.equal('Fizz')
  })
  it('should return Buzz when multiple of 5', () => {
    expect(FizzBuzz(25)).to.be.equal('Buzz')
    expect(FizzBuzz(50)).to.be.equal('Buzz')
  })
  it('should return FizzBuzz when multiple 3 of 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
  })
  it('should return the number non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7)
    expect(FizzBuzz(8)).to.be.equal(8)
  })
})
