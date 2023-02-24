import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/',
    children: 'Test',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (
  args,
) => <AppLink {...args} />;

export const AppLinkPrimary = Template.bind({});
AppLinkPrimary.args = {
  theme: AppLinkTheme.PRIMARY,
};

export const AppLinkPrimaryDark = Template.bind({});
AppLinkPrimary.args = {
  theme: AppLinkTheme.PRIMARY,
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkSecondary = Template.bind({});
AppLinkSecondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const AppLinkSecondaryDark = Template.bind({});
AppLinkSecondary.args = {
  theme: AppLinkTheme.SECONDARY,
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
