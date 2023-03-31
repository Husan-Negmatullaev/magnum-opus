import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'story select',
  options: [
    { value: 'option 1', content: 'option 1' },
    { value: 'option 2', content: 'option 2' },
    { value: 'option 3', content: 'option 3' },
  ],
};
