import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { Button, ButtonThemes } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import classes from './ProfileCard.module.scss';
import { getProfilesReadonly } from '../../model/selectors/getProfilesReadonly/getProfilesReadonly';
import { getProfilesData } from '../../model/selectors/getProfilesData/getProfilesData';
import { getProfilesError } from '../../model/selectors/getProfilesError/getProfilesError';
import { getProfilesLoading } from '../../model/selectors/getProfilesLoading/getProfilesLoading';

interface ProfileCardProps extends React.ComponentProps<'div'> {

}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfilesData);
  const isLoading = useSelector(getProfilesLoading);
  const error = useSelector(getProfilesError);
  const isReadonly = useSelector(getProfilesReadonly);

  return (
    <div className={classNames(classes.profile, {}, [className])}>
      <div className={classes.profile__header}>
        <Text
          title={t('profile-card-title')}
        />
        <Button theme={ButtonThemes.OUTLINE}>
          {t('edit-profile')}
        </Button>
      </div>
      <div className={classes.profile__content}>
        <Input
          value={data?.first}
          className={classes.profile__input}
          placeholder={t('profile-username-placeholder')}
          readOnly={isReadonly}
        />
        <Input
          value={data?.lastname}
          className={classes.profile__input}
          placeholder={t('profile-lastname-placeholder')}
          readOnly={isReadonly}
        />
      </div>
    </div>
  );
};
