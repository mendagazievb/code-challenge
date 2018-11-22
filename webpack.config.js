const path = require('path');

module.exports = {
  entry: './scripts/test',

  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'dist')
  }
};