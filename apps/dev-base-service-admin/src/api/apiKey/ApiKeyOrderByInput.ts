import { SortOrder } from "../../util/SortOrder";

export type ApiKeyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  key?: SortOrder;
  name?: SortOrder;
  scopes?: SortOrder;
  expiresAt?: SortOrder;
  lastUsed?: SortOrder;
  rateLimit?: SortOrder;
  userId?: SortOrder;
};
