import { StateScheme } from 'app/providers/StoreProvider';
import { getProfilesLoading } from './getProfilesLoading';

describe('getProfilesLoading.test', () => {
  test('should return "true" with state', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfilesLoading(state as StateScheme)).toBe(true);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfilesLoading(state as StateScheme)).toBeUndefined();
  });
});
