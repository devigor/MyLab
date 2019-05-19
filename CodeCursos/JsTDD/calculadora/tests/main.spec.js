import { expect } from 'chai'
import { calc } from '../src/main'

describe('Calc', () => {
  // smoke test
  describe('Smoke Test', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist
    })
    it('should exist the method sum', () => {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a.function
    })
    it('should exist the method sub', () => {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a.function
    })
    it('should exist the method div', () => {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a.function
    })
    it('should exist the method mul', () => {
      expect(calc.mul).to.exist
      expect(calc.mul).to.be.a.function
    })
  })
  // testing the methods
  describe('Testing all the methods', () => {
    it('should return the sum of 2 + 2 and 2,5 + 2,5', () => {
      expect(calc.sum(2,2)).to.be.equal(4)
      expect(calc.sum(2.5, 2.5)).to.be.equal(5.0)
    })
    it('should return the sub of 5 - 3 and 1,0 - 0,5', () => {
      expect(calc.sub(5, 3)).to.be.equal(2)
      expect(calc.sub(1.0, 0.5)).to.be.equal(0.5)
    })
    it('should return the mul of 5 * 2 and 1 * 0.5', () => {
      expect(calc.mul(2, 5)).to.be.equal(10)
      expect(calc.mul(2, 0.5)).to.be.equal(1)
    })
    it('should return the div of 10 / 2 and 7 / 2', () => {
      expect(calc.div(10, 2)).to.be.equal(5)
      expect(calc.div(7, 2)).to.be.equal(3.5)
    })
  })
})
