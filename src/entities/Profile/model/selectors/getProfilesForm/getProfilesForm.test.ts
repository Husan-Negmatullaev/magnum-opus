import { StateScheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { getProfilesForm } from './getProfilesForm';

describe('getProfilesForm.test', () => {
  test('should work with filled profile state', () => {
    const data = {
      first: 'Husan',
      lastname: 'Negmatullaev',
      age: 19,
      country: Country.Uzbekistan,
      city: 'Samarkand',
      currency: Currency.SUM,
      username: 'admin',
      avatar: 'shared/assets/test/avatar.webp',
    };

    const state: DeepPartial<StateScheme> = {
      profile: {
        form: data,
      },
    };
    expect(getProfilesForm(state as StateScheme)).toEqual(data);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfilesForm(state as StateScheme)).toBeUndefined();
  });
});
