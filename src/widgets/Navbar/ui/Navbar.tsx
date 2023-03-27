import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Button, ButtonThemes } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserState, userActions } from 'entities/User';
import classes from './Navbar.module.scss';

interface NavbarProps extends React.ComponentProps<'nav'> {

}

export const Navbar = React.memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpenAuth, setIsOpenAuth] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const authData = useSelector(getAuthUserState);

  const onCloseAuthModal = React.useCallback(() => {
    setIsOpenAuth(false);
  }, []);

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout());
    setIsOpenAuth(false);
  }, [dispatch]);

  const onOpenAuthModal = React.useCallback(() => {
    setIsOpenAuth(true);
  }, []);

  if (authData) {
    return (
      <nav className={classNames(classes.navbar, {}, [className])}>
        <Button
          type="button"
          theme={ButtonThemes.CLEAR_INVERTED}
          onClick={onLogout}
        >
          {t('sign-out')}
        </Button>
      </nav>
    );
  }

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
});
