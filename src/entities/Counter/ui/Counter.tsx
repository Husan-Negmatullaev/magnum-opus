import React from 'react';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  getCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps extends React.ComponentProps<'div'> {

}

export const Counter: React.FC<CounterProps> = (props) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { className } = props;
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={className}>
      <h2 data-testid="counter-value">
        {counterValue}
      </h2>
      <Button
        data-testid="increment-btn"
        onClick={increment}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
