import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { updateProfileData } from 'entities/Profile';
import { profileReducer, profileActions } from './profileSlice';
import { ProfileScheme, ValidateProfileErrors } from '../type/profile';

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

describe('loginSlice.test', () => {
  test('test set readonly action', () => {
    const state: DeepPartial<ProfileScheme> = { readonly: true };
    expect(profileReducer(
        state as ProfileScheme,
        profileActions.setReadonly(false),
    )).toEqual({ readonly: false });
  });

  test('test cancel edit actio', () => {
    const state: DeepPartial<ProfileScheme> = {
      form: {
        ...data,
        first: 'Hasan',
        lastname: 'NE Negmatullaev',
        age: undefined,
      },
      data,
      readonly: false,
      validateErrors: [ValidateProfileErrors.INVALID_AGE],
    };
    expect(profileReducer(
        state as ProfileScheme,
        profileActions.cancelEdit(),
    )).toEqual({
      data,
      form: data,
      validateErrors: undefined,
      readonly: true,
    });
  });

  test('test update profile action', () => {
    const state: DeepPartial<ProfileScheme> = {
      form: {
        username: 'Admin',
      },
    };

    expect(profileReducer(
        state as ProfileScheme,
        profileActions.updateProfile({ username: 'common user' }),
    )).toEqual({
      form: {
        username: 'common user',
      },
    });
  });

  test('test service action updateProfileData pending', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(
        state as ProfileScheme,
        updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test service action updateProfileData fulfilled', () => {
    const state: DeepPartial<ProfileScheme> = {
      isLoading: true,
      data: undefined,
      form: undefined,
      validateErrors: [ValidateProfileErrors.NO_DATA],
    };

    expect(profileReducer(
        state as ProfileScheme,
        updateProfileData.fulfilled(data, ''),
    )).toEqual({
      data,
      form: data,
      isLoading: false,
      validateErrors: undefined,
    });
  });
});
