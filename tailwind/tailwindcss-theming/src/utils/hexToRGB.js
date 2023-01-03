module.exports = (color) => {
  if (!color.startsWith('#')) return color;
  const c = color.startsWith('#') ? color.substring(1) : color;
  const l = c.length;

  if (l === 3) {
    return [
      parseInt(`${c.substring(0, 1)}${c.substring(0, 1)}`, 16),
      parseInt(`${c.substring(1, 2)}${c.substring(1, 2)}`, 16),
      parseInt(`${c.substring(2, 3)}${c.substring(2, 3)}`, 16),
    ].join(' ');
  }

  if (l === 6) {
    return [
      parseInt(c.substring(0, 2), 16),
      parseInt(c.substring(2, 4), 16),
      parseInt(c.substring(4, 6), 16),
    ].join(' ');
  }
};
