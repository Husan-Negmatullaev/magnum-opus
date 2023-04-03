import { StateScheme } from 'app/providers/StoreProvider';

export const getProfilesValidates = (state: StateScheme) => state.profile?.validateErrors;
