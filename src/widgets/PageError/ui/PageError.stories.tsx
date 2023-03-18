import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { PageError } from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
  },
  decorators: [StoreDecorator({ login: { } })],
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});
PageErrorLight.args = {
  isOpen: true,
};

export const PageErrorDark = Template.bind({});
PageErrorDark.args = {
  isOpen: true,
};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
