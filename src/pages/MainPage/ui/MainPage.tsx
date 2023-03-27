import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = React.memo(() => {
  const { t } = useTranslation('home');
  return (
    <div>
      {t('main-text')}
    </div>
  );
});

export default MainPage;
