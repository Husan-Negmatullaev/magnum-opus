import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonThemes } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import classes from './EditableProfileHeader.module.scss';

interface EditableProfileHeaderProps extends React.ComponentProps<'div'> {
    readonly?: boolean;
}

export const EditableProfileHeader = (props: EditableProfileHeaderProps) => {
  const {
    className,
    readonly,
  } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onEdit = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = React.useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = React.useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(classes.editableProfileHeader, {}, [className])}>
      <Text
        title={t('profile-card-title')}
      />
      {
        readonly
          ? (
            <Button
              theme={ButtonThemes.OUTLINE}
              onClick={onEdit}
            >
              {t('edit-profile')}
            </Button>
          )
          : (
            <div className={classes.editableProfileHeader__buttons}>
              <Button
                theme={ButtonThemes.OUTLINE_RED}
                onClick={onCancelEdit}
              >
                {t('cancel-edit-profile')}
              </Button>
              <Button
                theme={ButtonThemes.OUTLINE}
                onClick={onSave}
              >
                {t('save-edit-profile')}
              </Button>
            </div>
          )
      }
    </div>
  );
};
