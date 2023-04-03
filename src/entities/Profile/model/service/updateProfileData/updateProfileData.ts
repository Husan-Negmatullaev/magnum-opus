import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from '../../type/profile';
import { getProfilesForm } from '../../selectors/getProfilesForm/getProfilesForm';
import { validateProfileErrors } from '../../service/validateProfileErrors/validateProfileErrors';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      rejectWithValue,
      extra,
      getState,
    } = thunkAPI;

    const formData = getProfilesForm(getState());

    const validateErrors = validateProfileErrors(formData);

    if (validateErrors.length) {
      return rejectWithValue(validateErrors);
    }

    try {
      const response = await extra.api.put('/profile', formData);

      if (!response.data) throw new Error(response.statusText);

      return response.data;
    } catch (error) {
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
