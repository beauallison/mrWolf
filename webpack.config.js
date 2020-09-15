const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const ManifestVersionSyncPlugin = require('webpack-manifest-version-sync-plugin');
const generateChangelog = require('./generateChangelog');

const config = {
  entry: {
    index: './src/pages/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.html'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf|css)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/index.html', to: './index.html' },
        { from: './src/fonts/', to: './fonts' },
        { from: './src/manifest.json', to: './manifest.json' },
        { from: './changelog.json', to: './changelog.json' },
      ],
    }),
    new ManifestVersionSyncPlugin(),
  ],
  optimization: {
    minimize: true,
  },
  mode: 'production',
  stats: 'minimal',
};

module.exports = async () => {
  await generateChangelog();
  return config;
};
