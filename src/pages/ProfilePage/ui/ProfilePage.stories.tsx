import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const NormalProfilePage = Template.bind({});

NormalProfilePage.decorators = [StoreDecorator({ })];

export const DarkProfilePage = Template.bind({});

DarkProfilePage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ })];
