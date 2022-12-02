const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin');

module.exports = function (env, { mode }) {
  const production = mode === 'production';
  return {
    mode: production ? 'production' : 'development',
    entry: {
      'custom-text-field': path.resolve(
        './src/components/custom-text-field/define.ts'
      ),
      'text-field': path.resolve('./src/components/text-field/define.ts'),
      error: path.resolve('./src/components/error/define.ts'),
    },
    resolve: {
      name: 'root',
      extensions: ['.ts', '.js', '.svg'],
      plugins: [new ResolveTypeScriptPlugin()],
    },
    output: {
      path: outDir,
      publicPath: '/',
      clean: true,
    },
    devServer: {
      open: true,
      port: 3000,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, './index.html'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
          exclude: /node_modules/,
        },
      ],
      plugins: [
        new HtmlWebpackPlugin({
          title: 'demo',
          template: path.resolve('./index.html'),
        }),
      ],
    },
    output: {
      filename: 'bundle/[name].js',
    },
  };
};
