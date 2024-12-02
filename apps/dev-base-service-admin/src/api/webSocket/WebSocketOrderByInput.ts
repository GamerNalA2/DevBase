import { SortOrder } from "../../util/SortOrder";

export type WebSocketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  disconnectedAt?: SortOrder;
  connectionId?: SortOrder;
  status?: SortOrder;
  connectedAt?: SortOrder;
  userId?: SortOrder;
};
