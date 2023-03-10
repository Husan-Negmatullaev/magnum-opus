import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageChanger } from 'widgets/LanguageChanger';
import { ThemeButton } from 'widgets/ThemeChanger';
import { Button, ButtonThemes } from 'shared/ui/Button';

import { classNames } from 'shared/lib/classNames';
import { ButtonSizes } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import classes from './SidebarLayout.module.scss';

interface SidebarLayoutProps extends React.ComponentProps<'aside'> {

}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapse, setCollapse] = React.useState<boolean>();

  const toggleCollapse = async () => {
    await setCollapse((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapse },
        [className],
      )}
    >
      <div className={classes.sidebar__body}>
        <div className={classes.sidebar__links}>
          <AppLink
            theme={AppLinkTheme.PRIMARY}
            to={RoutePath.main}
            className={classes.sidebar__link}
          >
            <HomeIcon className={classes.sidebar__icon} />
            <span>{t('nav-link-home')}</span>
          </AppLink>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={classes.sidebar__link}
          >
            <AboutIcon className={classes.sidebar__icon} />
            <span>{t('nav-link-about')}</span>
          </AppLink>
        </div>
        <Button
          className={classes.sidebar__collapse}
          data-testid="collapse-btn"
          square
          size={ButtonSizes.size_l}
          theme={ButtonThemes.BACKGROUND_INVERTED}
          onClick={toggleCollapse}
        >
          {t(collapse ? '>' : '<')}
        </Button>
      </div>
      <div className={classes.sidebar__footer}>
        <ThemeButton />
        <LanguageChanger short={collapse} />
      </div>
    </aside>
  );
};
