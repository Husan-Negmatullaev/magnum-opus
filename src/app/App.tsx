import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import "./styles/index.scss";
import {routerConfig} from "app/providers/router/routeConfig";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button type="button" onClick={toggleTheme}>Theme</button>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
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