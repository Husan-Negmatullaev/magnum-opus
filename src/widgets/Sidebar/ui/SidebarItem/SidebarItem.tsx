import React from 'react';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAuthUserState } from 'entities/User';
import { SidebarItemType } from '../../model/items';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps extends React.ComponentProps<'a'> {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = React.memo<SidebarItemProps>((props: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuthedUser = useSelector(getAuthUserState);

  const {
    item,
    collapsed,
  } = props;

  if (!isAuthedUser && item.authUser) return null;

  return (
    <AppLink
      to={item.path}
      className={classNames(classes.sidebarItem, { [classes.collapsed]: collapsed }, [])}
    >
      <item.Icon className={classes.sidebarItem__icon} />
      <span className={classes.sidebarItem__text}>{t(item.text)}</span>
    </AppLink>
  );
});
