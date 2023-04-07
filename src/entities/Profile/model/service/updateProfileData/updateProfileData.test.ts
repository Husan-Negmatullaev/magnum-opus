import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { ValidateProfileErrors } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

const form = {
  first: 'Husan',
  lastname: 'Negmatullaev',
  age: 19,
  country: Country.Uzbekistan,
  city: 'Samarkand',
  currency: Currency.SUM,
  username: 'admin',
  avatar: 'shared/assets/test/avatar.webp',
};

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: form }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(form);
  });

  test('server error while updating profiles data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileErrors.SERVER_ERROR,
    ]);
  });

  test('valid error while updating profiles data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...form, first: undefined, lastname: undefined, age: undefined,
        },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileErrors.INVALID_NAMES_DATA,
      ValidateProfileErrors.INVALID_AGE,
    ]);
  });
});
