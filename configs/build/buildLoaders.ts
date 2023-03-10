import webpack, { RuleSetRule } from 'webpack';
import { getSassLoader } from './loaders/sassLoader';
import { BuildOptions } from './types/configs';
import { getSvgLoader } from './loaders/svgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const sassLoader: RuleSetRule = getSassLoader(isDev);

  // Если не использкуеться typescript значит нужен babel-loader
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
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
    test: /\.(js|jsx|ts|tsx)$/,
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
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json',
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
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  };

  return [
    sassLoader,
    babelLoader,
    reactRefresh,
    typescriptLoader,
    svgLoader,
    imageLoader,
  ];
}
