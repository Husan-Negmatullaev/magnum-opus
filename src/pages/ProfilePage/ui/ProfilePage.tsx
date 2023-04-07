import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps extends React.ComponentProps<'div'> {

}

const ProfilePage = React.memo<ProfilePageProps>(({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <EditableProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
