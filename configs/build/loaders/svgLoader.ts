import Webpack from 'webpack';

export const getSvgLoader = (): Webpack.RuleSetRule => ({
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [{
    loader: '@svgr/webpack',
    options: {
      typescript: true,
      // dimensions: false,
      // expandProps: false,
      // icon: true,
      replaceAttrValues: [
        { black: 'currentColor' },
        { none: 'currentColor' },
        { '#000': 'currentColor' },
      ],
    },
  }],
});
