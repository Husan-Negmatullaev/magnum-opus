import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterScheme } from '../../types/CounterScheme';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterScheme) => counter.value,
);
