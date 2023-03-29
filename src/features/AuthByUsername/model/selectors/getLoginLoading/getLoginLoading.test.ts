import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateScheme> = { login: { isLoading: true } };
    expect(getLoginLoading(state as StateScheme)).toBeTruthy();
  });

  test('should return false with empty state', () => {
    const state: DeepPartial<StateScheme> = { };
    expect(getLoginLoading(state as StateScheme)).toBeFalsy();
  });
});
