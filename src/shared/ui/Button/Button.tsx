import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

export enum ButtonThemes {
    CLEAN = 'clear',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    theme?: ButtonThemes;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ButtonThemes.CLEAN,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={
        classNames(classes.button, {}, [className, classes[theme]])
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};
