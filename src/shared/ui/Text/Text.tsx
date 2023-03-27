import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Text.module.scss';

export enum TextThemes {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps extends React.ComponentProps<'div'> {
  title?: string;
  text?: string;
  themes?: TextThemes;
}

export const Text = React.memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    themes = TextThemes.PRIMARY,
  } = props;
  return (
    <div className={classNames(classes.block, { [classes[themes]]: true }, [className])}>
      {title && <h3 className={classes.title}>{title}</h3>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
