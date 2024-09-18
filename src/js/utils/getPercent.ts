/**
 * getPercent
 */

type GetPercent = (a: number, b: number) => number;

const getPercent: GetPercent = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
};

export default getPercent;
