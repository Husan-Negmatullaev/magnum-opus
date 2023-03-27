import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ButtonThemes {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSizes {
    size_m = 'size_m',
    size_l = 'size_l',
    size_xl = 'size_xl',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes;
    size?: ButtonSizes;
    square?: boolean;
}

export const Button = React.memo((props: ButtonProps) => {
  const {
    children,
    className,
    square,
    size = ButtonSizes.size_m,
    theme = ButtonThemes.CLEAR,
    type = 'button',
    disabled = false,
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
      type={type}
      className={classNames(
        classes.button,
        { },
        additional,
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
