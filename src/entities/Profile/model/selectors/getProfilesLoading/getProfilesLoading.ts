import { StateScheme } from 'app/providers/StoreProvider';

export const getProfilesLoading = (state: StateScheme) => state.profile?.isLoading;
