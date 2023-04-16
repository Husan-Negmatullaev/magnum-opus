import webpack, { RuleSetRule } from 'webpack';
import { getSassLoader } from './loaders/sassLoader';
import { BuildOptions } from './types/configs';
import { getSvgLoader } from './loaders/svgLoader';
import { babelLoader } from './loaders/babelLoader';

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

  return [
    svgLoader,
    imageLoader,
    babelLoader(isDev),
    typescriptLoader,
    sassLoader,
  ];
}
