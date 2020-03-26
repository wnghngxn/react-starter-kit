const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
const dotenvExpand = require('dotenv-expand');
const NODE_ENV = process.env.NODE_ENV;
const ENV_FILE_PATH = path.resolve(__dirname, '../../');

const dotenvFiles = [
  '.env',
  '.env.local',
  `.env.${NODE_ENV}`,
  `.env.${NODE_ENV}.local`,
].map(x => {
  return path.join(ENV_FILE_PATH, `./${x}`);
});

function loadEnv() {
  dotenvFiles.forEach(dotenvFile => {
    if (fs.existsSync(dotenvFile)) {
      dotenvExpand(
        dotenv.config({
          path: dotenvFile,
        }),
      );
    }
  });
}
module.exports = loadEnv;
