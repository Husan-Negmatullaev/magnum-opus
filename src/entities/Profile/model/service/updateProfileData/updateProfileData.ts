import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../type/profile';
import { getProfilesForm } from '../../selectors/getProfilesForm/getProfilesForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      rejectWithValue,
      extra,
      getState,
    } = thunkAPI;

    const formData = getProfilesForm(getState());

    try {
      const response = await extra.api.put('/profile', formData);

      if (!response.data) throw new Error(response.statusText);

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
