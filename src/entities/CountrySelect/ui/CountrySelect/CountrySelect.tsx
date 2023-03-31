import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/type/country';

interface CurrencySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    disabled?: boolean;
}

const countriesList = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.USA, content: Country.USA },
  { value: Country.EUROPE, content: Country.EUROPE },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Uzbekistan, content: Country.Uzbekistan },
];

export const CountrySelect = React.memo((props: CurrencySelectProps) => {
  const { t } = useTranslation();
  const {
    className,
    value,
    onChange,
    disabled,
  } = props;

  const onChangeHandler = React.useCallback((currency: string) => {
    onChange?.(currency as Country);
  }, [onChange]);

  return (
    <Select
      label={t('choose-country')}
      options={countriesList}
      disabled={disabled}
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      value={value}
    />
  );
});
