import { StateScheme } from 'app/providers/StoreProvider';

export const getAuthUserState = (state: StateScheme) => state.user.authUser;
