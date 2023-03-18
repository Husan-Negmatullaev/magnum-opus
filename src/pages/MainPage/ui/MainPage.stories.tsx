import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (
  args,
) => <MainPage />;

export const MainPageLight = Template.bind({});
MainPageLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const MainPageDark = Template.bind({});
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
