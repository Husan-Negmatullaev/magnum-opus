import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageChanger } from 'widgets/LanguageChanger';
import { ThemeButton } from 'widgets/ThemeChanger';
import { Button, ButtonThemes } from 'shared/ui/Button';

import { classNames } from 'shared/lib/classNames';
import classes from './SidebarLayout.module.scss';

interface SidebarLayoutProps extends React.ComponentProps<'aside'> {

}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapse, setCollapse] = React.useState<boolean>();

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <aside className={classNames(classes.sidebar, { [classes.collapsed]: collapse }, [className])}>
      <div className={classes.sidebar__body}>
        <Button
          theme={ButtonThemes.CLEAN}
          onClick={toggleCollapse}
        >
          {t('translation:nav-button-collapse')}
        </Button>
      </div>
      <div className={classes.sidebar__footer}>
        <ThemeButton />
        <LanguageChanger />
      </div>
    </aside>
  );
};
