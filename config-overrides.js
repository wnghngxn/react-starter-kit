const {
  override,
  addBundleVisualizer,
  overrideDevServer,
  useBabelRc,
} = require('customize-cra');
const dotenv = require('./lib/dotenv');
dotenv();
const path = require('path');
const ca = require('./lib/webpack/plugins/ca');
const port = require('./lib/webpack/plugins/port');
const sourcemap = require('./lib/webpack/plugins/sourcemap');
const devPort = process.env.REACT_APP_DEV_SERVER_PORT;

const config = {
  webpack: override(
    useBabelRc(),
    process.env.DEV_BUNDLE_VISUALIZE === '0' && addBundleVisualizer(),
    process.env.NODE_ENV === 'production' && sourcemap(false),
  ),
  devServer: overrideDevServer(
    process.env.HTTPS === 'true' &&
      ca(
        path.join(__dirname, './misc/ca/localhost.key'),
        path.join(__dirname, './misc/ca/localhost.crt'),
        path.join(__dirname, './misc/ca/localhostCA.pem'),
      ),
    devPort !== '3000' && port(devPort),
  ),
};

module.exports = config;
