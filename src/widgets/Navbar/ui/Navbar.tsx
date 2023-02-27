import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/classNames';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import classes from './Navbar.module.scss';

interface NavbarProp extends React.ComponentProps<'nav'> {

}

export const Navbar: React.FC<NavbarProp> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbar__links} />
    </nav>
  );
};
