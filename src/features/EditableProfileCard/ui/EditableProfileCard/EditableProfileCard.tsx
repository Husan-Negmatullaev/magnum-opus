import React from 'react';

import { classNames } from 'shared/lib/classNames';
import {
  fetchProfileData,
  getProfilesError,
  getProfilesForm,
  getProfilesLoading,
  getProfilesReadonly,
  getProfilesValidates,
  profileActions,
  ProfileCard,
  ValidateProfileErrors,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { EditableProfileHeader } from 'features/EditableProfileCard/ui/EditableProfileHeader';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { Text, TextThemes } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface EditableProfileCardProps extends React.ComponentProps<'div'> {

}

export const EditableProfileCard: React.FC<EditableProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile');
  const formData = useSelector(getProfilesForm);
  const isLoading = useSelector(getProfilesLoading);
  const error = useSelector(getProfilesError);
  const readonly = useSelector(getProfilesReadonly);
  const validateErrors = useSelector(getProfilesValidates);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const validateErrorsTranslate = {
    [ValidateProfileErrors.NO_DATA]: t('error-validate-no-data'),
    [ValidateProfileErrors.INVALID_AGE]: t('error-validate-age'),
    [ValidateProfileErrors.SERVER_ERROR]: t('error-validate-server'),
    [ValidateProfileErrors.INVALID_USER_DATA]: t('error-validate-user-data'),
    [ValidateProfileErrors.INVALID_GEO_DATA]: t('error-validate-geo-data'),
    [ValidateProfileErrors.INVALID_NAMES_DATA]: t('error-validate-names-data'),
  };

  const onChangeFirstName = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastName = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = React.useCallback((value?: string) => {
    const removeLetters = value?.replace(/[^\d]/g, '');
    dispatch(profileActions.updateProfile({ age: Number(removeLetters) }));
  }, [dispatch]);

  const onChangeCity = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeUsername = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = React.useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = React.useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <EditableProfileHeader
        readonly={readonly}
      />
      {
        validateErrors?.length
          && validateErrors?.map(
            (error) => <Text key={error} themes={TextThemes.ERROR} text={validateErrorsTranslate[error]} />,
          )
      }
      <div>
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          isReadonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </div>
  );
};
