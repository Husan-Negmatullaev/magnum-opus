import { StateScheme } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from 'entities/Profile';
import { getProfilesValidates } from './getProfilesValidates';

describe('getProfilesValidates.test', () => {
  test('should return "true" with state', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        validateErrors: [ValidateProfileErrors.NO_DATA],
      },
    };
    expect(getProfilesValidates(state as StateScheme)).toEqual([ValidateProfileErrors.NO_DATA]);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfilesValidates(state as StateScheme)).toBeUndefined();
  });
});
