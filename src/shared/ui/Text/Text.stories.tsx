import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Text, TextThemes } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // decorators: [ThemeDecorator(Theme.LIGHT)],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title Title',
  text: 'description description description description',
  themes: TextThemes.PRIMARY,
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  title: 'Title Title',
  text: 'description description description description',
  themes: TextThemes.PRIMARY,
};

PrimaryInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title Title',
  themes: TextThemes.PRIMARY,
};

export const OnlyTitleInverted = Template.bind({});
OnlyTitleInverted.args = {
  title: 'Title Title',
  themes: TextThemes.PRIMARY,
};

OnlyTitleInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'description description description description',
  themes: TextThemes.PRIMARY,
};

export const OnlyTextInverted = Template.bind({});
OnlyTextInverted.args = {
  text: 'description description description description',
  themes: TextThemes.PRIMARY,
};

OnlyTextInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
  title: 'Title Title',
  text: 'description description description description',
  themes: TextThemes.ERROR,
};
