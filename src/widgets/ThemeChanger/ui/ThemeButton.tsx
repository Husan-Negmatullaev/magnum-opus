import React from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button';
import IconThemeDark from 'shared/assets/icons/theme-dark.svg';
import classes from './ThemeButton.module.scss';

interface ToggleThemeProps extends React.HTMLAttributes<HTMLButtonElement> {

}

export const ThemeButton = React.memo(({ className }: ToggleThemeProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      theme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      <IconThemeDark className={classes.icon} />
    </Button>
  );
});
