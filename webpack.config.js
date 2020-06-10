const path = require('path')

module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    }
  };