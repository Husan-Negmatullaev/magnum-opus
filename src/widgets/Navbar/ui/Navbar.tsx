import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Button, ButtonThemes } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProp extends React.ComponentProps<'nav'> {

}

export const Navbar: React.FC<NavbarProp> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpenAuth, setIsOpenAuth] = React.useState<boolean>(false);

  const onCloseAuthModal = React.useCallback(() => {
    setIsOpenAuth(false);
  }, []);

  const onOpenAuthModal = React.useCallback(() => {
    setIsOpenAuth(true);
  }, []);

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbar__links}>
        <Button
          theme={ButtonThemes.CLEAR_INVERTED}
          onClick={onOpenAuthModal}
        >
          {t('sign-in')}
        </Button>
        <LoginModal isOpen={isOpenAuth} onClose={onCloseAuthModal} />
      </div>
    </nav>
  );
};
