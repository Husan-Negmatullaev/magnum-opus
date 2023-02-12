import {BuildOptions} from "./types/configs";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(configs: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = configs;
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        devServer: isDev ? buildDevServer(configs) : undefined,
        devtool: isDev ? "inline-source-map" : undefined,
    }
}