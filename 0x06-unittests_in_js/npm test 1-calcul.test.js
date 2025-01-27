const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber() - type SUM', () => {
  it('add 7 and 8', () => {
    assert.equal(calculateNumber('SUM', 7, 8), 15);
  });
  it('add 1 and 3.5', () => {
    assert.equal(calculateNumber('SUM', 1, 3.5), 5);
  });
  it('add 2.0 and 3.0', () => {
    assert.equal(calculateNumber('SUM', 2.0, 3.0), 5);
  });
  it('add 1.7 and 3.5', () => {
    assert.equal(calculateNumber('SUM', 1.7, 3.5), 5);
  });
  it('return 0 when adding 0.1 and 0.3', () => {
    assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
  });
  it('add -0.3 and 0.3', () => {
    assert.equal(calculateNumber('SUM', -0.3, 0.3), 0);
  });
  it('add -0.8 and -0.7', () => {
    assert.equal(calculateNumber('SUM', -0.8, -0.7), -2);
  });
});

describe('calculateNumber() - type SUBTRACT', () => {
  it('subtract 3 and 5', () => {
    assert.equal(calculateNumber('SUBTRACT', 3, 5), -2);
  });
  it('subtract 0.3 and 0.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.3, 0.5), 0);
  });
  it('subtract 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('subtract 4 and 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 4, 3.7), 0);
  });
  it('subtract 0.5 and 0.3', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.5, 0.3), 0);
  });
  it('subtract -0.8 and 0.8', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.8, 0.8), -2);
  });
  it('subtract -1.28 and -1.3', () => {
    assert.equal(calculateNumber('SUBTRACT', -1.28, -1.3), 0);
  });
  it('subtract 0.8 and -0.4', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
  });
});

describe('calculateNumber() - type DIVIDE', () => {
  it('divide 1 and 3', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 'Error');
  });
  it('divide 2 and 3', () => {
    assert.equal(calculateNumber('DIVIDE', 2, 3), 'Error');
  });
  it('divide 7.1 and 8', () => {
    assert.equal(calculateNumber('DIVIDE', 7.1, 8), 1);
  });
  it('divide 4.4 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', 4.4, 2.4), 2);
  });
  it('divide 5.7 and 2.5', () => {
    assert.equal(calculateNumber('DIVIDE', 5.7, 2.5), 2);
  });
  it('divide 1.3 and 0.3', () => {
    assert.equal(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
  });
  it('divide -0.7 and 0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
  });
  it('divide -0.8 and -0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
  });
  it('divide -44.5 and 2.4', () => {
    assert.equal(calculateNumber('DIVIDE', -44.5, 2.4), -22);
  });
  it('divide -88.5 and -3.6', () => {
    assert.equal(calculateNumber('DIVIDE', -88.5, -3.6), 22);
  });
});
