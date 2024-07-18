import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "location";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.location?.toString() || String(record.id);
};
