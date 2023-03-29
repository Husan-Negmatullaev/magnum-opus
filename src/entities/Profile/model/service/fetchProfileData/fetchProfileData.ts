import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../type/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const {
      rejectWithValue,
      extra,
    } = thunkAPI;

    try {
      const response = await extra.api.get('/profile');

      if (!response.data) throw new Error(response.statusText);

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
