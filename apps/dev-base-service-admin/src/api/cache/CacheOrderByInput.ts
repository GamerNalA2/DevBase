import { SortOrder } from "../../util/SortOrder";

export type CacheOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  key?: SortOrder;
  value?: SortOrder;
  ttl?: SortOrder;
  lastAccessed?: SortOrder;
};
