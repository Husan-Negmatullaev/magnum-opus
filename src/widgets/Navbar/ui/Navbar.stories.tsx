import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarLight = Template.bind({});

export const NavbarDark = Template.bind({});
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)];
