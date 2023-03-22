import Webpack from 'webpack';

export const getSvgLoader = (): Webpack.RuleSetRule => ({
  test: /\.svg$/i,
  use: ['@svgr/webpack'],
});
