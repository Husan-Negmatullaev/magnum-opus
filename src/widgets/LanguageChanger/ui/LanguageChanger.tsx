import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonThemes, Button } from 'shared/ui/Button';

import { classNames } from 'shared/lib/classNames';

interface LanguageChangerProps extends React.ComponentProps<'button'> {
  short?: boolean;
}

export const LanguageChanger: React.FC<LanguageChangerProps> = (
  {
    className,
    short,
  },
) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      onClick={toggleLanguage}
      theme={ButtonThemes.CLEAN}
      className={classNames('', {}, [className])}
    >
      {t(short ? 'short-language' : 'language')}
    </Button>
  );
};
