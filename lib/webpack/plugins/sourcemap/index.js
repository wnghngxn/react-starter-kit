const soucemap = devtool => config => {
  return {
    devtool,
    ...config,
  };
};

module.exports = soucemap;
