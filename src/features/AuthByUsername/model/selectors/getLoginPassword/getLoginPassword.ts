import { StateScheme } from 'app/providers/StoreProvider';

export const getLoginPassword = (state: StateScheme) => state.login?.password || '';
