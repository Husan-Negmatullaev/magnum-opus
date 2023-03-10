import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clean = Template.bind({});
Clean.args = {
  children: 'Test',
  theme: ButtonThemes.CLEAR,
};

export const CleanInverted = Template.bind({});
CleanInverted.args = {
  children: 'Test',
  theme: ButtonThemes.CLEAR_INVERTED,
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

export const OutlineSquareSizeM = Template.bind({});
OutlineSquareSizeM.args = {
  children: '>',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSizes.size_m,
  square: true,
};

export const OutlineSquareSizeL = Template.bind({});
OutlineSquareSizeL.args = {
  children: '>',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSizes.size_l,
  square: true,
};

export const OutlineSquareSizeXL = Template.bind({});
OutlineSquareSizeXL.args = {
  children: '>',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSizes.size_xl,
  square: true,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Test',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSizes.size_m,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Test',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSizes.size_l,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Test',
  theme: ButtonThemes.OUTLINE,
  size: ButtonSizes.size_xl,
};
