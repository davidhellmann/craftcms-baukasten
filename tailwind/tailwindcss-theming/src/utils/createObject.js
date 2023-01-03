module.exports = (obj, colorName, colorLevel, value) => {
  if (obj[colorName]) {
    obj[colorName][colorLevel] = value;
  } else {
    obj[colorName] = {
      [colorLevel]: value,
    };
  }
};
