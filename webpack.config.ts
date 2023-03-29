import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './configs/build/types/configs';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isAnalyze = env.analyze || false;

  const isDev = mode === 'development';

  const apiUrl = env.apiUrl || 'http://localhost:8000';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    analyze: isAnalyze,
    apiUrl,
  });
};
