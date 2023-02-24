import Webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/configs';
import { getSassLoader } from '../build/loaders/sassLoader';
import { getSvgLoader } from '../build/loaders/svgLoader';

export default ({ config }: { config: Webpack.Configuration }) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
    build: '',
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: Webpack.RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(getSvgLoader());
  config.module.rules.push(getSassLoader(true));

  return config;
};
