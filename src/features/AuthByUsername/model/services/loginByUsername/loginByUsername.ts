import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface loginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios
        .post('http://localhost:8000/login', authData);

      if (!response.data) throw new Error(response.statusText);

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthUser(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
