const port = port => config => {
  return {
    ...config,
    port: parseInt(port),
  };
};

module.exports = port;
