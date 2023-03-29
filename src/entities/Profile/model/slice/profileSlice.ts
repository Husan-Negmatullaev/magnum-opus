import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { Profile, ProfileScheme } from '../../model/type/profile';

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
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
