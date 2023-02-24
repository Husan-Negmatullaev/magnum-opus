import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
  <div className={`app ${theme}`}>
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  </div>
);
