import { Profile, ValidateProfileErrors } from '../../type/profile';

export const validateProfileErrors = (profile?: Profile): ValidateProfileErrors[] => {
  const validateErrors: ValidateProfileErrors[] = [];

  if (!profile) {
    validateErrors.push(ValidateProfileErrors.NO_DATA);
    return validateErrors;
  }

  if (!profile.first || !profile.lastname) {
    validateErrors.push(ValidateProfileErrors.INVALID_NAMES_DATA);
  }

  if (!profile.age || !Number.isInteger(profile.age)) {
    validateErrors.push(ValidateProfileErrors.INVALID_AGE);
  }

  if (!profile.city || !profile.country) {
    validateErrors.push(ValidateProfileErrors.INVALID_GEO_DATA);
  }

  if (!profile.username || !profile.avatar) {
    validateErrors.push(ValidateProfileErrors.INVALID_USER_DATA);
  }

  return validateErrors;
};
