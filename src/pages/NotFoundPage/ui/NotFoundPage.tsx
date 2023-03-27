import React from 'react';

import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps extends React.ComponentProps<'section'> {

}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={classNames(classes.notFoundPage, {}, [className])}>
      <h1 className={classes.notFoundPage__title}>
        {t('not-found')}
      </h1>
    </section>
  );
};
