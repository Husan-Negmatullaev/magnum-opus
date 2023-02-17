import React from 'react';

import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

interface PageLoaderProps extends React.ComponentProps<'section'> {

}

export const PageLoader: React.FC<PageLoaderProps> = ({ className }) => (
  <section className={classNames(classes.pageLoader, {}, [className])}>
    <Loader />
  </section>
);
