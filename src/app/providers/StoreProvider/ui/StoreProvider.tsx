import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/configs/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from '../configs/StateScheme';

interface StoreProviderProps {
    children: React.ReactNode,
    initialState?: DeepPartial<StateScheme>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState as StateScheme);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
