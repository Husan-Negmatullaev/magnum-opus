import React from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageChanger } from 'widgets/LanguageChanger';
import { ThemeButton } from 'widgets/ThemeChanger';
import { Button, ButtonThemes } from 'shared/ui/Button';

import { classNames } from 'shared/lib/classNames';
import { ButtonSizes } from 'shared/ui/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import classes from './SidebarLayout.module.scss';
import { SidebarItemsList } from '../../model/items';

interface SidebarLayoutProps extends React.ComponentProps<'aside'> {

}

export const SidebarLayout = React.memo(({ className }: SidebarLayoutProps) => {
  const { t } = useTranslation();
  const [collapse, setCollapse] = React.useState<boolean>();

  const toggleCollapse = async () => {
    await setCollapse((prev) => !prev);
  };

  const itemsList = React.useMemo(() => SidebarItemsList.map(
    (item) => <SidebarItem key={item.path} item={item} collapsed={collapse} />,
  ), [collapse]);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapse },
        [className],
      )}
    >
      <div className={classes.sidebar__body}>
        <div className={classes.sidebar__links}>
          {itemsList}
        </div>
        <Button
          className={classes.sidebar__collapse}
          data-testid="collapse-btn"
          square
          size={ButtonSizes.size_l}
          theme={ButtonThemes.BACKGROUND_INVERTED}
          onClick={toggleCollapse}
        >
          {t(collapse ? '>' : '<')}
        </Button>
      </div>
      <div className={classes.sidebar__footer}>
        <ThemeButton />
        <LanguageChanger short={collapse} />
      </div>
    </aside>
  );
});
