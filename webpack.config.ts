import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./configs/build/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./configs/build/types/configs";

const paths: BuildPaths = {
	entry: path.resolve(__dirname, "src", "index.ts"),
	build: path.resolve(__dirname, "dist"),
	html: path.resolve(__dirname, "public", "index.html")
};

const mode: BuildMode = "development";
const isDev = mode === "development";

const configs: webpack.Configuration = buildWebpackConfig({
	mode: "development",
	paths,
	isDev,
})

export default configs;