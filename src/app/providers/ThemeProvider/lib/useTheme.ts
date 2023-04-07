import React from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface IUseTheme {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.BLUE;
      break;
    case Theme.BLUE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
      break;
    }
    console.log(newTheme);
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  React.useEffect(() => {
    document.body.className = theme || '';
  }, [theme]);

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
