import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { SidebarLayout } from './SidebarLayout';

export default {
  title: 'widgets/SidebarLayout',
  component: SidebarLayout,
  argTypes: {},
  decorators: [
    StoreDecorator({
      user: {
        authUser: {
          username: 'Admin',
          id: '1',
        },
      },
    }),
  ],
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (
  args,
) => <SidebarLayout {...args} />;

export const SidebarLight = Template.bind({});

export const SidebarDark = Template.bind({});
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SidebarWithoutAuth = Template.bind({});
SidebarWithoutAuth.decorators = [StoreDecorator({
  user: {},
})];
