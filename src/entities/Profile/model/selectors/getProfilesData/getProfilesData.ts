import { StateScheme } from 'app/providers/StoreProvider';

export const getProfilesData = (state: StateScheme) => state.profile?.data;
