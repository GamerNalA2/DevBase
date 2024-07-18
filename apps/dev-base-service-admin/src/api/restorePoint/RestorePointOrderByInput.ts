import { SortOrder } from "../../util/SortOrder";

export type RestorePointOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  backupId?: SortOrder;
  status?: SortOrder;
  endTime?: SortOrder;
  restoredBy?: SortOrder;
};
