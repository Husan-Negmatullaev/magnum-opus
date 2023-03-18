import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
  decorators: [
    StoreDecorator({ login: { username: 'admin', password: '123' } }),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});

export const NavbarLightWithAuth = Template.bind({});
NavbarLightWithAuth.decorators = [StoreDecorator({ user: { authUser: {} } })];

export const NavbarDark = Template.bind({});
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NavbarDarkWithAuth = Template.bind({});
NavbarDarkWithAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authUser: {} } })];
