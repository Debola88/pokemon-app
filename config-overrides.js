const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "assert": require.resolve("assert"),
    "url": require.resolve("url"),
  };
  return config;
};
