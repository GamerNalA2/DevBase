import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  phoneNumber?: SortOrder;
  lastLogin?: SortOrder;
  isActive?: SortOrder;
  profilePicture?: SortOrder;
  twoFactorEnabled?: SortOrder;
  preferredLanguage?: SortOrder;
  timezone?: SortOrder;
};
