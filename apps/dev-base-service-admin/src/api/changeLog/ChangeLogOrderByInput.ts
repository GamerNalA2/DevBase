import { SortOrder } from "../../util/SortOrder";

export type ChangeLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  entityType?: SortOrder;
  changes?: SortOrder;
  entity?: SortOrder;
  changeType?: SortOrder;
  version?: SortOrder;
  createdBy?: SortOrder;
  entityTypeField?: SortOrder;
  versionField?: SortOrder;
  entityField?: SortOrder;
  changeTypeField?: SortOrder;
  createdByField?: SortOrder;
  createdAtField?: SortOrder;
  changesField?: SortOrder;
};
