import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { NotFoundPage } from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (
  args,
) => <NotFoundPage />;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
