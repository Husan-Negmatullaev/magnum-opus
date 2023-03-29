export type {
  Profile,
  ProfileScheme,
} from './model/type/profile';

export {
  profileReducer,
  profileActions,
} from './model/slice/profileSlice';

export {
  fetchProfileData,
} from './model/service/fetchProfileData/fetchProfileData';

export {
  ProfileCard,
} from './ui/ProfileCard';
