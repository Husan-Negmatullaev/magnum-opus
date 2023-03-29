import React from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
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

  const navigate = useNavigate;

  const store = createReduxStore(
      initialState as StateScheme,
      asyncReducers as ReducersMapObject<StateScheme>,
      navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
