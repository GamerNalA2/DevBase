import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  assignedAt?: SortOrder;
  assignedBy?: SortOrder;
  userId?: SortOrder;
  roleId?: SortOrder;
};
