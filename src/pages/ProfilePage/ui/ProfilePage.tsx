import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps extends React.ComponentProps<'div'> {

}

const ProfilePage = React.memo<ProfilePageProps>(({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
