import { SortOrder } from "../../util/SortOrder";

export type UserSessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deviceInfo?: SortOrder;
  token?: SortOrder;
  ipAddress?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  userId?: SortOrder;
};
