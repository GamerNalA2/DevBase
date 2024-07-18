import { SortOrder } from "../../util/SortOrder";

export type QueryCacheOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  result?: SortOrder;
  expiresAt?: SortOrder;
  queryId?: SortOrder;
};
