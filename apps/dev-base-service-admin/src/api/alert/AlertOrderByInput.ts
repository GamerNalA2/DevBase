import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  createdBy?: SortOrder;
  condition?: SortOrder;
  action?: SortOrder;
  status?: SortOrder;
  lastTriggered?: SortOrder;
};
