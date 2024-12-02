import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  event?: SortOrder;
  userId?: SortOrder;
  collectionId?: SortOrder;
  queryId?: SortOrder;
};
