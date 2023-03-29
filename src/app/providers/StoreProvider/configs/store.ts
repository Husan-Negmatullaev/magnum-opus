import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/configs/reducerManager';
import { $api } from 'shared/api/api';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router';
import { StateScheme } from './StateScheme';

export function createReduxStore(
  initialState?: StateScheme,
  asyncReducers?: ReducersMapObject<StateScheme>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StateScheme> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    // @ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<StateScheme>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware(
      {
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      },
    )),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export const store = createReduxStore();

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
