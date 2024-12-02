import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  actionType?: SortOrder;
  entityType?: SortOrder;
  changes?: SortOrder;
  timestamp?: SortOrder;
  ipAddress?: SortOrder;
  entity?: SortOrder;
  userId?: SortOrder;
};
