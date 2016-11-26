const expect = require('chai').expect

import balancedParens from '../bracketBalance'

describe('bracket balance function', () => {
  it('should be a function', () =>{
    expect(balancedParens).to.be.a('function')
  });
  it('should return false with "("', () => {
    const result = balancedParens('(');
    expect(result).to.be.false;
  });
  it('should return true with "()"', () => {
    const result = balancedParens('()');
    expect(result).to.be.true;
  });
  it('should return false with ")("', () => {
    const result = balancedParens(')(');
    expect(result).to.be.false;
  });
  it('should return true with "(())"', () => {
    const result = balancedParens('(())');
    expect(result).to.be.true;
  });
  it('should return true with "[](){}"', () => {
    const result = balancedParens('[](){}');
    expect(result).to.be.true;
  });
  it('should return true with "[({})]"', () => {
    const result = balancedParens('[({})]');
    expect(result).to.be.true;
  });
  it('should return false with "[(]{)}"', () => {
    const result = balancedParens('[(]{)}');
    expect(result).to.be.false;
  });
  it('should return true with "var wow  = { yo: thisIsAwesome() }"', () => {
    const result = balancedParens('var wow  = { yo: thisIsAwesome() }');
    expect(result).to.be.true;
  });
  it('should return false with "var hubble = function() { telescopes.awesome();"', () => {
    const result = balancedParens('var hubble = function() { telescopes.awesome();');
    expect(result).to.be.false;
  });
});
