import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const {
      rejectWithValue,
      dispatch,
      extra,
    } = thunkAPI;

    try {
      const response = await extra.api.post('/login', authData);

      if (!response.data) throw new Error(response.statusText);

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthUser(response.data));
      extra?.navigate?.('/');

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
