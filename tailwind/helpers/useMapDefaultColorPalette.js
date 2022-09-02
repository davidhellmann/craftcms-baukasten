module.exports = (
  params = {
    palette: null,
    name: null,
  },
) => {
  if (!params.palette || !params.name) return;
  const colors = {
    [params.name]: {}
  };
  Object.entries(params.palette).map((color) => {
    colors[params.name][`${color[0]}`] = color[1];
  });

  return colors;
};
