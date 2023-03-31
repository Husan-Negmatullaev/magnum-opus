import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Text.module.scss';

export enum TextThemes {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps extends React.ComponentProps<'div'> {
  title?: string;
  text?: string;
  themes?: TextThemes;
  align?: TextAlign;
}

export const Text = React.memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    align = TextAlign.LEFT,
    themes = TextThemes.PRIMARY,
  } = props;

  const additional = [
    className,
    classes[themes],
    classes[align],
  ];

  return (
    <div className={classNames(classes.block, { }, additional)}>
      {title && <h3 className={classes.title}>{title}</h3>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
