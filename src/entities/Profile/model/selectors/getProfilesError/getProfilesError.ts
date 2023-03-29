import { StateScheme } from 'app/providers/StoreProvider';

export const getProfilesError = (state: StateScheme) => state.profile?.error || '';
