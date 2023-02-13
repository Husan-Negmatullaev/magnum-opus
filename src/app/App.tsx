import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {hovered: true, selectable: true, some: true}, [theme, "class1 class2"])}>
            <button type="button" onClick={toggleTheme}>Theme</button>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;