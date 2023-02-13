import React from "react";
import {Link, LinkProps} from "react-router-dom";

import {classNames} from "shared/lib/classNames";
import classes from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: React.ReactChild | React.ReactChildren;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.link, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};