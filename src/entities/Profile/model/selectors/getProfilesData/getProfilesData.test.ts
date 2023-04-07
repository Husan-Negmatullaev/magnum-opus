import { StateScheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { getProfilesData } from './getProfilesData';

describe('getProfilesData.test', () => {
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
        data,
      },
    };
    expect(getProfilesData(state as StateScheme)).toEqual(data);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfilesData(state as StateScheme)).toBeUndefined();
  });
});
