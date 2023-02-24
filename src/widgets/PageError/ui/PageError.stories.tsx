import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageError } from 'widgets/PageError';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (
  args,
) => <PageError {...args} />;

export const PageErrorLight = Template.bind({});

export const PageErrorDark = Template.bind({});
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
