import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetching profiles data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
