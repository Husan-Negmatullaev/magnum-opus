import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
  },
  decorators: [StoreDecorator({ login: { } })],
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const ModalPrimary = Template.bind({});
ModalPrimary.args = {
  isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  isOpen: true,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
