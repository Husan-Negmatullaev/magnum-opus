import React from "react";

import {classNames} from "shared/lib/classNames";
import {Button, ButtonThemes} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/ThemeButton";
import classes from "./SidebarLayout.module.scss";

interface SidebarLayoutProps extends React.ComponentProps<"aside"> {

}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ className }) => {
    const [collapse, setCollapse] = React.useState<boolean>();

    const toggleCollapse = () => {
        setCollapse(prev => !prev);
    };

    return (
        <aside className={classNames(classes.sidebar, {[classes.collapsed]: collapse}, [className])}>
            <div className={classes.sidebar__body}>
                <Button
                    theme={ButtonThemes.CLEAN}
                    onClick={toggleCollapse}
                >Toggle</Button>
            </div>
            <div className={classes.sidebar__footer}>
                <ThemeButton />
            </div>
        </aside>
    );
};