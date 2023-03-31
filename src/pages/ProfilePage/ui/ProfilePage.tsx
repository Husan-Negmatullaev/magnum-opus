import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames';
import { EditableProfileCard } from 'features/EditableProfileCard';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps extends React.ComponentProps<'div'> {

}

const ProfilePage = React.memo<ProfilePageProps>(({ className }: ProfilePageProps) => (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames('', {}, [className])}>
      <EditableProfileCard />
    </div>
  </DynamicModuleLoader>
));

export default ProfilePage;
