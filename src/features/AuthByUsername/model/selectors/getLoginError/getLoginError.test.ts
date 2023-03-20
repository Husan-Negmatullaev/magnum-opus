import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('should return error value', () => {
    const state: DeepPartial<StateScheme> = {
      login: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateScheme)).toBe('error');
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getLoginError(state as StateScheme)).toBeUndefined();
  });
});
