module.exports = {
  mode: 'production',
  entry: {
    script1: './src/script1.js',
    script2: './src/script2.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  optimization: {
    minimize: false,
  }
};
