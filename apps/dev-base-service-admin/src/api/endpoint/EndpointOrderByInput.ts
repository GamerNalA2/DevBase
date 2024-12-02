import { SortOrder } from "../../util/SortOrder";

export type EndpointOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  path?: SortOrder;
  method?: SortOrder;
  description?: SortOrder;
  authentication?: SortOrder;
  rateLimit?: SortOrder;
};
