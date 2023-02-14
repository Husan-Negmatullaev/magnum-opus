import React from "react";
import {useTranslation} from "react-i18next";

import { ButtonThemes, Button } from "shared/ui/Button";

import {classNames} from "shared/lib/classNames";
import classes from "./LanguageChanger.module.scss";

interface LanguageChangerProps extends React.ComponentProps<"button"> {

}

export const LanguageChanger: React.FC<LanguageChangerProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }
    return (
        <Button
            onClick={toggleLanguage}
            theme={ButtonThemes.CLEAN}
            className={classNames(classes.LanguageChanger, {}, [className])}
        >
            {t("language")}
        </Button>
    );
};