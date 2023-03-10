import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

import { Button, ButtonThemes } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import classes from './Navbar.module.scss';

interface NavbarProp extends React.ComponentProps<'nav'> {

}

export const Navbar: React.FC<NavbarProp> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpenAuth, setIsOpenAuth] = React.useState<boolean>(false);

  const toggleAuthModal = React.useCallback(() => {
    setIsOpenAuth((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.navbar__links}>
        <Button
          theme={ButtonThemes.CLEAR_INVERTED}
          onClick={toggleAuthModal}
        >
          {t('sign-in')}
        </Button>
        <Modal isOpen={isOpenAuth} onClose={toggleAuthModal}>
          {/* eslint-disable-next-line max-len */}
          {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus eum exercitationem, id officia quas quibusdam quo saepe suscipit voluptatibus. Amet, assumenda beatae cumque nostrum obcaecati qui temporibus voluptates! Debitis deserunt odit quod ratione. Aut consequatur molestias nostrum obcaecati tempore!')}
        </Modal>
      </div>
    </nav>
  );
};
