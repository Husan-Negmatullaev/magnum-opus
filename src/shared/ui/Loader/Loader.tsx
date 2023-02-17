import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Loader.module.scss';

interface LoaderProps extends React.ComponentProps<'div'> {

}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div aria-busy className={classNames(classes.loader, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
