import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {Navbar} from "widgets/Navbar";

import {routerConfig} from "app/providers/router/routeConfig";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import "./styles/index.scss";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <Suspense fallback={"Loading..."}>
                <Routes>
                    {
                        Object.values(routerConfig).map(({path, element}) => (
                            <Route
                                key={path}
                                path={path}
                                element={element}
                            />
                        ))
                    }
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;