const calculateNumber = (type, a, b) => {
  const a_rounded = Math.round(a);
  const b_rounded = Math.round(b);

  if (type === 'SUM') {
    return a_rounded + b_rounded;
  }
  if (type === 'SUBTRACT') {
    return a_rounded - b_rounded;
  }
  if (type === 'DIVIDE') {
    if (b_rounded === 0) {
      return 'Error';
    }
    return a_rounded / a_rounded;
  }
};

module.exports = calculateNumber;
