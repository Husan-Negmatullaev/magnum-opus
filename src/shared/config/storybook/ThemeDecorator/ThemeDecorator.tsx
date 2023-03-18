import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  document.body.className = theme;
  return (
    <ThemeProvider initialTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
