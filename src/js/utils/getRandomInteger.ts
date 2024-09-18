/**
 * getRandomInteger
 */

type GetRandomInteger = (min: number, max: number) => number;

const getRandomInteger: GetRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInteger;
