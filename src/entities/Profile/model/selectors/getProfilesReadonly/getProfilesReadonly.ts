import { StateScheme } from 'app/providers/StoreProvider';

export const getProfilesReadonly = (state: StateScheme) => state.profile?.readonly;
