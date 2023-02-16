import React from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button';

import IconThemeLight from 'shared/assets/icons/theme-light.svg';
import IconThemeDark from 'shared/assets/icons/theme-dark.svg';

interface ToggleThemeProps extends React.HTMLAttributes<HTMLButtonElement> {

}

export const ThemeButton: React.FC<ToggleThemeProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      theme={ButtonThemes.CLEAN}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <IconThemeDark /> : <IconThemeLight />}
    </Button>
  );
};
