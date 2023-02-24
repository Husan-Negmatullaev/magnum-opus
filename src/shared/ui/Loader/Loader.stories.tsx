import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from 'shared/ui/Loader/Loader';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderLight = Template.bind({});

export const LoaderDark = Template.bind({});
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
