import { StateScheme } from 'app/providers/StoreProvider';

export const getProfilesForm = (state: StateScheme) => state.profile?.form;
