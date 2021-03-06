const InjectPlugin = require('webpack-inject-plugin').default;

module.exports = (env = {}) => {
  return {
    entry: './test/src/test.ts',
    output: {
      filename: 'test/dist/index.js',
      chunkFilename: 'test/dist/[name].js',
      path: __dirname,
      publicPath: "/"
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader'
            } 
          },
          {
            test: /\.css$/,
            use: ['to-string-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpg|svg|jpeg|gif)$/,
            loader: 'url-loader'
          }
        ]
      },
  }
};
