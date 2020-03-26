const fs = require('fs');
const ca = (key, cert, ca) => config => {
  return {
    ...config,
    https: {
      key: fs.readFileSync(key),
      cert: fs.readFileSync(cert),
      ca: fs.readFileSync(ca),
    },
  };
};

module.exports = ca;
