import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutAsyncPage} from "./pages/AboutPage/AboutPage.async";
import {MainAsyncPage} from "./pages/MainPage/MainPage.async";

import {useTheme} from "./theme/useTheme";

import "./styles/index.scss";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button type="button" onClick={toggleTheme}>Theme</button>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path={"/"} element={<MainAsyncPage />} />
                    <Route path={"/about"} element={<AboutAsyncPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;