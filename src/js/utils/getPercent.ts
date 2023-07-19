/**
 * getPercent
 */

const getPercent = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
};

export default getPercent;
