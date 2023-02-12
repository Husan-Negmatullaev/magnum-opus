import webpack, {RuleSetRule} from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const sassLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    // Если не использкуеться typescript значит нужен babel-loader
    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
        sassLoader,
    ];
}