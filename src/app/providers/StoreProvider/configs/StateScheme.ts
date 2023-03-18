import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;

    // Асинхронные редюсеры
    login?: LoginScheme
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>,
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>,
    add: (key: StateSchemeKey, reducer: Reducer) => void,
    remove: (key: StateSchemeKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducerManager;
}
