const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add your custom configurations here
  // Example: Adding polyfill for crypto
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    util: require.resolve('util/'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    vm: require.resolve('vm-browserify'),
  };
  return config;
};
