/**
 * getRandomFloat
 */

const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default getRandomFloat;
