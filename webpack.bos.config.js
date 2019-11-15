const merge = require('webpack-merge');




module.exports = (env) => {
  const common = require('./webpack.common.config.js')(env);
  return merge(common, {
    mode: "production",
    watch: true,
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
