import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = React.memo(() => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('main-text')}
    </div>
  );
});

export default AboutPage;
