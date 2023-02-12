import webpack, {RuleSetRule} from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader
    ];
}