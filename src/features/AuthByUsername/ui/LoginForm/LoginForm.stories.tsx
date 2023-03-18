import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123' } }),
  ThemeDecorator(Theme.LIGHT),
];

export const WithError = Template.bind({});
WithError.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123', error: 'ERROR' } }),
];

export const LoadingForm = Template.bind({});
LoadingForm.decorators = [
  StoreDecorator({ login: { username: 'admin', password: '123', isLoading: true } }),
];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
