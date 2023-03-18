import React from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props;

  const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);
  const defaultProps = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
