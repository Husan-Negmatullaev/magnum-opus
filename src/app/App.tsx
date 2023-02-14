import React from 'react';

import {Navbar} from "widgets/Navbar";
import {SidebarLayout} from "widgets/Sidebar";

import {AppRouter} from "app/providers/router/routeConfig";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import "./styles/index.scss";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="content-app">
                <SidebarLayout />
                <main>
                    <AppRouter />
                </main>
            </div>
        </div>
    );
};

export default App;