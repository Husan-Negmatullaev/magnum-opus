import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateScheme>
}

export const componentRender = (
  component: React.ReactNode,
  options: componentRenderOptions = {},
) => {
  const {
    route = '/',
    initialState,
  } = options;

  return (
    render(
      <StoreProvider initialState={initialState}>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18n}>
            {component}
          </I18nextProvider>
        </MemoryRouter>
      </StoreProvider>,
    )
  );
};
