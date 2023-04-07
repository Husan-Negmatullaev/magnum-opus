import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import ExampleAvatar from 'shared/assets/test/avatar.webp';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {},
  decorators: [
    StoreDecorator({
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
    }),
  ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const NormalProfilePage = Template.bind({});

NormalProfilePage.decorators = [];

export const DarkProfilePage = Template.bind({});

DarkProfilePage.decorators = [ThemeDecorator(Theme.DARK)];
