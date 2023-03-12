import React from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
>

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    autoFocus?: boolean
}

export const Input = React.memo((props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    onChange,
    autoFocus,
    ...otherProps
  } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  React.useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames(classes.input, {}, [className])}
      {...otherProps}
    />
  );
});
