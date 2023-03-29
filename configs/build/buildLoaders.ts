import webpack, { RuleSetRule } from 'webpack';
import { getSassLoader } from './loaders/sassLoader';
import { BuildOptions } from './types/configs';
import { getSvgLoader } from './loaders/svgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const sassLoader: RuleSetRule = getSassLoader(isDev);

  // Если не использкуеться typescript значит нужен babel-loader
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
    exclude: /node_modules/,
  };

  const svgLoader: RuleSetRule = getSvgLoader();

  const imageLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader: RuleSetRule = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const reactRefresh: RuleSetRule = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ],
  };

  return [
    reactRefresh,
    svgLoader,
    imageLoader,
    babelLoader,
    typescriptLoader,
    sassLoader,
  ];
}
