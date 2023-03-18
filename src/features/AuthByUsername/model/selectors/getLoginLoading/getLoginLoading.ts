import { StateScheme } from 'app/providers/StoreProvider';

export const getLoginLoading = (state: StateScheme) => state.login?.isLoading || false;
