import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Currency } from '../../model/type/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    disabled?: boolean;
}

const currencyList = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.KZT, content: Currency.KZT },
  { value: Currency.BR, content: Currency.BR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.SUM, content: Currency.SUM },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = React.memo((props: CurrencySelectProps) => {
  const { t } = useTranslation();
  const {
    className,
    value,
    onChange,
    disabled,
  } = props;

  const onChangeHandler = React.useCallback((currency: string) => {
    onChange?.(currency as Currency);
  }, [onChange]);

  return (
    <Select
      label={t('choose-currency')}
      options={currencyList}
      disabled={disabled}
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      value={value}
    />
  );
});
