import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ButtonThemes {
    CLEAN = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSizes {
    size_m = 'size_m',
    size_l = 'size_l',
    size_xl = 'size_xl',
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes;
    size?: ButtonSizes;
    square?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    square,
    size = ButtonSizes.size_m,
    theme = ButtonThemes.CLEAN,
    ...otherProps
  } = props;

  const additional = [
    className,
    classes[theme],
    classes[size],
    square ? classes.square : null,
  ];

  return (
    <button
      type="button"
      className={
        classNames(classes.button, { }, additional)
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};
