import webpack from 'webpack';
import { BuildOptions } from './types/configs';

export function buildResolvers(config: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [config.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
