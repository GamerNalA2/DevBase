import { SortOrder } from "../../util/SortOrder";

export type RateLimiterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  resourceType?: SortOrder;
  resource?: SortOrder;
  limit?: SortOrder;
  window?: SortOrder;
  current?: SortOrder;
  lastReset?: SortOrder;
};
