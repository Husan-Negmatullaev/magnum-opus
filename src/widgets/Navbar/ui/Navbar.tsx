import React from "react";

import {AppLink} from "shared/ui/AppLink";
import {classNames} from "shared/lib/classNames";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";

import classes from "./Navbar.module.scss";

interface NavbarProp extends React.ComponentProps<"nav"> {

}

export const Navbar: React.FC<NavbarProp> = ({ className }) => {
    return (
        <nav className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.navbar__links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={"/"}
                    className={classes.navbar__link}
                >
                    Home
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={"/about"}
                    className={classes.navbar__link}
                >
                    About
                </AppLink>
            </div>
        </nav>
    );
};