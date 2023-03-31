import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from 'shared/lib/classNames';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/CurrencySelect';
import { Country, CountrySelect } from 'entities/CountrySelect';
import classes from './ProfileCard.module.scss';
import { Profile } from '../../model/type/profile';

interface ProfileCardProps extends React.ComponentProps<'div'> {
    data?: Profile,
    isLoading?: boolean,
    error?: string,
    isReadonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const {
    data,
    className,
    error,
    isLoading,
    isReadonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(classes.profile, {}, [className, classes.profile_loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(classes.profile, {}, [className, classes.profile_error])}>
        <Text
          themes={TextThemes.ERROR}
          title={t('error-profile-card-title')}
          text={t('error-profile-card-text')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [classes.profile_editing]: !isReadonly,
  };

  return (
    <div className={classNames(classes.profile, mods, [className])}>
      {
        data?.avatar && (
          <div className={classes.profile__meta}>
            <Avatar size={100} src={data.avatar} alt={t('profile-avatar-alt')} />
          </div>
        )
      }
      <div className={classes.profile__content}>
        <Input
          type="text"
          value={data?.first}
          className={classes.profile__input}
          placeholder={t('profile-name-placeholder')}
          readonly={isReadonly}
          onChange={onChangeFirstName}
        />
        <Input
          type="text"
          value={data?.lastname}
          className={classes.profile__input}
          placeholder={t('profile-lastname-placeholder')}
          readonly={isReadonly}
          onChange={onChangeLastName}
        />
        <Input
          type="text"
          value={data?.age}
          className={classes.profile__input}
          placeholder={t('profile-age-placeholder')}
          readonly={isReadonly}
          onChange={onChangeAge}
        />
        <Input
          type="text"
          value={data?.city}
          className={classes.profile__input}
          placeholder={t('profile-city-placeholder')}
          readonly={isReadonly}
          onChange={onChangeCity}
        />
        <Input
          type="text"
          value={data?.username}
          className={classes.profile__input}
          placeholder={t('profile-username-placeholder')}
          readonly={isReadonly}
          onChange={onChangeUsername}
        />
        <Input
          type="text"
          value={data?.avatar}
          className={classes.profile__input}
          placeholder={t('profile-avatar-placeholder')}
          readonly={isReadonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          className={classes.profile__input}
          disabled={isReadonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          className={classes.profile__input}
          disabled={isReadonly}
        />
      </div>
    </div>
  );
};
