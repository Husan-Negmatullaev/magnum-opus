import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/configs';

export function buildDevServer(configs: BuildOptions): DevServerConfiguration {
  return {
    port: configs.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
