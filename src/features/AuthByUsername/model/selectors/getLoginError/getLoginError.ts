import { StateScheme } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateScheme) => state.login?.error;
