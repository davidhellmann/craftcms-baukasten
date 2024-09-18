/**
 * getRandomFloat
 */

type GetRandomFloat = (min: number, max: number) => number;

const getRandomFloat: GetRandomFloat = (min, max) => Math.random() * (max - min) + min;

export default getRandomFloat;
