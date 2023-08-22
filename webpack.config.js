import path from 'path';

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '...'],
    extensionAlias: {
      '.js': ['.ts', '.js'],
      '.mjs': '.mts',
      '.cjs': '.cts',
    },
  },
  entry: './src/frontend/static/js/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist', 'frontend', 'static', 'js'),
  },
};

export default config;
