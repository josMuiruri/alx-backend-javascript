const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  it('rounding of a', () => {
    assert.equal(calculateNumber(3.14, 4), 7);
    assert.equal(calculateNumber(7.72, 1), 9);
    assert.equal(calculateNumber(1.5, 2), 3);
  });

  it('rounding of b', () => {
    assert.equal(calculateNumber(4, 3.14), 7);
    assert.equal(calculateNumber(1, 7.72), 9);
    assert.equal(calculateNumber(2, 1.5), 3);
  });

  it('suming of a and b', () => {
    assert.equal(calculateNumber(3.14, 4.5), 8);
    assert.equal(calculateNumber(7.72, 1.4), 9);
    assert.equal(calculateNumber(1.5, 2.9), 4);
  });
});
