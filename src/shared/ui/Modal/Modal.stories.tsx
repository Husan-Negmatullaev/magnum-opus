import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from 'shared/ui/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus eum exercitationem, id officia quas quibusdam quo saepe suscipit voluptatibus. Amet, assumenda beatae cumque nostrum obcaecati qui temporibus voluptates! Debitis deserunt odit quod ratione. Aut consequatur molestias nostrum obcaecati tempore!',
  isOpen: true,
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus eum exercitationem, id officia quas quibusdam quo saepe suscipit voluptatibus. Amet, assumenda beatae cumque nostrum obcaecati qui temporibus voluptates! Debitis deserunt odit quod ratione. Aut consequatur molestias nostrum obcaecati tempore!',
  isOpen: true,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
