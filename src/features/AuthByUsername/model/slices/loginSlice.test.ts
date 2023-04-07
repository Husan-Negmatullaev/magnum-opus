import { loginReducer, loginActions } from './loginSlice';
import { LoginScheme } from '../types/loginScheme';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginScheme> = { username: 'admin' };
    expect(loginReducer(
        state as LoginScheme,
        loginActions.setUsername('admin'),
    )).toEqual({ username: 'admin' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginScheme> = { password: '123' };
    expect(loginReducer(
        state as LoginScheme,
        loginActions.setPassword('123'),
    )).toEqual({ password: '123' });
  });
});
