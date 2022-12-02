const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin');

const outDir = path.resolve(__dirname, "./dist/cdn");

module.exports = {
  name: "root",
  entry: {
    'custom-text-field': path.resolve(
      './src/components/custom-text-field/define.js'
    ),
    'text-field': path.resolve('./src/components/text-field/define.js'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg'],
    plugins: [new ResolveTypeScriptPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ]
      },
    ],
  },
  output: {
    path: outDir,
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ]
};
