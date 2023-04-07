import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeButton } from 'widgets/ThemeChanger';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'widgets/ThemeButton',
  component: ThemeButton,
  argTypes: {},
} as ComponentMeta<typeof ThemeButton>;

const Template: ComponentStory<typeof ThemeButton> = (
  args,
) => <ThemeButton {...args} />;

export const ThemeButtonLight = Template.bind({});

export const ThemeButtonDark = Template.bind({});
ThemeButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ThemeButtonBlue = Template.bind({});
ThemeButtonBlue.decorators = [ThemeDecorator(Theme.BLUE)];
