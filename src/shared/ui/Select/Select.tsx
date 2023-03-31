import React, { ChangeEvent } from 'react';

import { classNames } from 'shared/lib/classNames';
import classes from './Select.module.scss';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    label?: string;
    options?: SelectOption[];
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const Select = React.memo((props: SelectProps) => {
  const {
    label,
    options,
    className,
    value,
    onChange,
    disabled,
  } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const optionsList = React.useMemo(() => options?.map((optionObj) => (
    <option
      className={classes.select__option}
      value={optionObj.value}
      key={optionObj.value}
    >
      {optionObj.content}
    </option>
  )), [options]);

  return (
    <div className={classNames(classes.select, {}, [className])}>
      {
        label && (
          <label
            htmlFor="id:0"
            className={classes.select__label}
          >
            {`${label}>`}
          </label>
        )
      }
      <select
        id="id:0"
        disabled={disabled}
        className={classes.select__body}
        onChange={onChangeHandler}
        value={value}
      >
        {optionsList}
      </select>
    </div>
  );
});
