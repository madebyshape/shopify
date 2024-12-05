const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'custom.js',
    path: path.resolve(__dirname, 'assets'),
  },
};