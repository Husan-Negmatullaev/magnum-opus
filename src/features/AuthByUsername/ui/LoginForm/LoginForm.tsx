import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps extends React.ComponentProps<'div'> {

}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <form className={classNames(classes.form, {}, [className])}>
      <Input
        type="text"
        className={classes.form__input}
        placeholder={t('Введите username')}
        autoFocus
      />
      <Input
        type="text"
        className={classes.form__input}
        placeholder={t('Введите пароль')}
      />
      <Button
        theme={ButtonThemes.OUTLINE}
        className={classes.form__btn}
      >
        {t('sign-in')}
      </Button>
    </form>
  );
};
