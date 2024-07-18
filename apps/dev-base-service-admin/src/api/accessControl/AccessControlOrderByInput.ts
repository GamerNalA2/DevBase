import { SortOrder } from "../../util/SortOrder";

export type AccessControlOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  resourceType?: SortOrder;
  permissions?: SortOrder;
  resource?: SortOrder;
  roleId?: SortOrder;
  resourceTypeField?: SortOrder;
  permissionsField?: SortOrder;
  resourceField?: SortOrder;
  roleField?: SortOrder;
};
