import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Test',
  theme: ButtonThemes.PRIMARY,
};

export const Clean = Template.bind({});
Clean.args = {
  children: 'Test',
  theme: ButtonThemes.CLEAN,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Test',
  theme: ButtonThemes.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Test',
  theme: ButtonThemes.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
