const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("stream-http"),
      "path": require.resolve("path-browserify"),
      "fs": false,
      "stream": require.resolve("stream-browserify"),
      "querystring": require.resolve("querystring-es3")
    }
  },
  // Other webpack configurations...
};
