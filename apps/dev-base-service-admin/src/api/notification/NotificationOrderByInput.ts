import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  content?: SortOrder;
  isRead?: SortOrder;
  createdAtField?: SortOrder;
  userId?: SortOrder;
};
