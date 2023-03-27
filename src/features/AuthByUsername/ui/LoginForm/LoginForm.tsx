import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useSelector } from 'react-redux';
import { Text, TextThemes } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import classes from './LoginForm.module.scss';

export interface LoginFormProps extends React.ComponentProps<'div'> {
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const password = useSelector(getLoginPassword);
  const username = useSelector(getLoginUsername);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = React.useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = React.useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onSubmitHandler = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <form
        className={classNames(classes.form, {}, [className])}
        onSubmit={onSubmitHandler}
      >
        <Text title={t('login-form-title')} />
        {error && <Text themes={TextThemes.ERROR} text={t('form-error')} />}
        <Input
          type="text"
          className={classes.form__input}
          placeholder={t('placeholder-username')}
          autoFocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={classes.form__input}
          placeholder={t('placeholder-password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          type="submit"
          disabled={isLoading}
          theme={ButtonThemes.OUTLINE}
          className={classes.form__btn}
        >
          {t('sign-in')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

export default LoginForm;
