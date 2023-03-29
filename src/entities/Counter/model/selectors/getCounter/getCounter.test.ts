import { StateScheme } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return object with counter property', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
  });
});
