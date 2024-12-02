import { SortOrder } from "../../util/SortOrder";

export type AnalyticsEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  eventType?: SortOrder;
  eventData?: SortOrder;
  timestamp?: SortOrder;
  context?: SortOrder;
  userId?: SortOrder;
  collectionId?: SortOrder;
};
