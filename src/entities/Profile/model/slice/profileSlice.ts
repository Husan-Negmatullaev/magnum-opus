import { createSlice } from '@reduxjs/toolkit';
import { ProfileScheme } from '../../model/type/profile';

const initialState: ProfileScheme = {
  readonly: true,
  isLoading: true,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
