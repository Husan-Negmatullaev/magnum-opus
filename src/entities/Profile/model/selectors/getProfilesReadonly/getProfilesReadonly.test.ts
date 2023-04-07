import { StateScheme } from 'app/providers/StoreProvider';
import { getProfilesReadonly } from './getProfilesReadonly';

describe('getProfilesReadonly.test', () => {
  test('should return "true" with state', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfilesReadonly(state as StateScheme)).toBe(true);
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfilesReadonly(state as StateScheme)).toBeUndefined();
  });
});
