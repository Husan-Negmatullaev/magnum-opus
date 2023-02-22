import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export const renderTranslationTest = (component: React.ReactNode) => (
  render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>,
  )
);
