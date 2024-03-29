import { ComponentMeta, ComponentStory } from '@storybook/react';
import ExampleAvatar from 'shared/assets/test/avatar.webp';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
  args: {
    src: ExampleAvatar,
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (
  args,
) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 50,
};

export const Average = Template.bind({});
Average.args = {
  size: 100,
};

export const Large = Template.bind({});
Large.args = {
  size: 150,
};
