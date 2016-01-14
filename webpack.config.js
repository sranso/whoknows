module.exports = [
  {
    name: 'default',
    entry: './client.js',
    output: {
      path: __dirname + '/build/js',
      filename: 'client.js'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }]
    }
  }
];
