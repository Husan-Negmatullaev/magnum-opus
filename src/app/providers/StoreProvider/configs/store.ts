import { configureStore } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider/configs/StateScheme';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateScheme) {
  return configureStore<StateScheme>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export const store = createReduxStore();
