import Webpack from 'webpack';

export const getSvgLoader = (): Webpack.RuleSetRule => ({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack'],
});
