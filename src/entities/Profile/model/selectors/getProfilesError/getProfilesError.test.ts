import { StateScheme } from 'app/providers/StoreProvider';
import { getProfilesError } from './getProfilesError';

describe('getProfilesError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        error: 'CRITICAL ERROR',
      },
    };
    expect(getProfilesError(state as StateScheme)).toBe('CRITICAL ERROR');
  });

  test('should return empty string without state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfilesError(state as StateScheme)).toBe('');
  });
});
