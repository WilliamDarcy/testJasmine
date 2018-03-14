const calc = require('../../site/calc.js');
 
describe("fonction calculatrice", function() {
 
  describe("addition", function() {
 
    it("addition de deux nombres", function() {
      let value = calc.addition(3, 2);
      expect(value).toBe(5);
    });
})
})