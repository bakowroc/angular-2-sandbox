var webpack = require('webpack');

module.exports = {

  entry: {
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ],
    'app': './src/main.ts'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.component.ts$/, loader: 'ts!angular2-template'},
      {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ]
};
