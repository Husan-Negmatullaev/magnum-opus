import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutAsyncPage} from "./pages/AboutPage/AboutPage.async";
import {MainAsyncPage} from "./pages/MainPage/MainPage.async";

import "./index.scss";

const App = () => {
    return (
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={"Loading..."}>
                <Routes>
                    <Route path={"/"} element={<MainAsyncPage />} />
                    <Route path={"/about"} element={<AboutAsyncPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;