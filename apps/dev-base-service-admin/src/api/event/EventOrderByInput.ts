import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  data?: SortOrder;
  timestamp?: SortOrder;
  originatorId?: SortOrder;
  originatorType?: SortOrder;
};
