import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  bio?: SortOrder;
  location?: SortOrder;
  website?: SortOrder;
  socialLinks?: SortOrder;
  skills?: SortOrder;
  experience?: SortOrder;
  userId?: SortOrder;
};
