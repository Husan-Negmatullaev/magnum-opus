import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import { ValidateProfileErrors } from 'entities/Profile';
import { validateProfileErrors } from './validateProfileErrors';

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

describe('validateProfileErrors.test', () => {
  test('success validate', () => {
    const result = validateProfileErrors(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', () => {
    const result = validateProfileErrors({ ...data, lastname: '', first: '' });

    expect(result).toEqual([
      ValidateProfileErrors.INVALID_NAMES_DATA,
    ]);
  });

  test('without age', () => {
    const result = validateProfileErrors({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INVALID_AGE,
    ]);
  });

  test('without geo data', () => {
    const result = validateProfileErrors({ ...data, city: undefined, country: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INVALID_GEO_DATA,
    ]);
  });

  test('without user data', () => {
    const result = validateProfileErrors({ ...data, username: '', avatar: '' });

    expect(result).toEqual([
      ValidateProfileErrors.INVALID_USER_DATA,
    ]);
  });

  test('without data', () => {
    const result = validateProfileErrors({});

    expect(result).toEqual([
      ValidateProfileErrors.INVALID_NAMES_DATA,
      ValidateProfileErrors.INVALID_AGE,
      ValidateProfileErrors.INVALID_GEO_DATA,
      ValidateProfileErrors.INVALID_USER_DATA,
    ]);
  });
});
