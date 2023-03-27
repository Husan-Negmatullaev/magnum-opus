import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {

}

const ProfilePage = React.memo<ProfilePageProps>(() => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {t('profile-page')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
