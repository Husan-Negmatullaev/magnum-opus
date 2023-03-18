import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserScheme } from '../types/user';

const initialState: UserScheme = {

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.authUser = action.payload;
    },
    initUser: (state, action: PayloadAction<User>) => {
      if (action.payload) {
        state.authUser = action.payload;
      }
    },
    logout: (state) => {
      state.authUser = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
