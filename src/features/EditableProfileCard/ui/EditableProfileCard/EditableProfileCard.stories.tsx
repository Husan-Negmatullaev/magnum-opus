import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import ExampleAvatar from 'shared/assets/test/avatar.webp';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const withData = Template.bind({});

withData.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Husan',
      lastname: 'Negmatullaev',
      age: 19,
      country: Country.Uzbekistan,
      city: 'Samarkand',
      currency: Currency.SUM,
      username: 'admin',
      avatar: ExampleAvatar,
    },
  },
})];

export const withLoader = Template.bind({});

withLoader.decorators = [StoreDecorator({
  profile: {
    isLoading: true,
  },
})];

export const withError = Template.bind({});

withError.decorators = [StoreDecorator({
  profile: {
    error: 'error',
  },
})];
