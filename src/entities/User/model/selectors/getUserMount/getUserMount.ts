import { StateScheme } from 'app/providers/StoreProvider';

export const getUserMount = (state: StateScheme) => state.user._mount;
