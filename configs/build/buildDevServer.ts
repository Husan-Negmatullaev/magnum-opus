import {BuildOptions} from "./types/configs";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(configs: BuildOptions): DevServerConfiguration {

    return  {
        port: configs.port,
        open: true,
        historyApiFallback: true,
    }
}