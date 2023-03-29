import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateScheme> = { login: { password: '123123' } };
    expect(getLoginPassword(state as StateScheme)).toBe('123123');
  });

  test('should return false with empty state', () => {
    const state: DeepPartial<StateScheme> = { };
    expect(getLoginPassword(state as StateScheme)).toBe('');
  });
});
