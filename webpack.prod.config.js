const merge = require('webpack-merge');

module.exports = (env) => {
  const common = require('./webpack.common.config.js')(env);
  return merge(common, {
    mode: "production",
    output: {
      chunkFilename: 'dist/[name].[chunkHash].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['postcss-loader'],
        }
      ]
    }
  })
};
