import { SortOrder } from "../../util/SortOrder";

export type BackupScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  nextBackup?: SortOrder;
  configField?: SortOrder;
  frequency?: SortOrder;
  lastBackup?: SortOrder;
  retention?: SortOrder;
};
