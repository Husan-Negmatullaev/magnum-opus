import React from 'react';

import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import classes from './PageError.module.scss';

interface PageErrorProps extends React.ComponentProps<'section'> {

}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const onReload = () => {
    window.location.reload();
  };

  return (
    <section className={classNames(classes.pageError, {}, [className])}>
      <h1 className={classes.pageError__title}>
        {t('error-occurred')}
      </h1>
      <Button
        onClick={onReload}
        className={classes.pageError__button}
      >
        {t('reload-page')}
      </Button>
    </section>
  );
};
