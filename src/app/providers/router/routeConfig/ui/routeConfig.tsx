import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

enum AppRoute {
    MAIN = "main",
    ABOUT = "about"
}

const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: "/",
    [AppRoute.ABOUT]: "/about"
}

export const routerConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}