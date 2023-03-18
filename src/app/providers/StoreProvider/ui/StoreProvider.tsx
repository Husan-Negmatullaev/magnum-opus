import React from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../configs/store';
import { StateScheme } from '../configs/StateScheme';

interface StoreProviderProps {
    children: React.ReactNode,
    initialState?: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(
      initialState as StateScheme,
      asyncReducers as ReducersMapObject<StateScheme>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
