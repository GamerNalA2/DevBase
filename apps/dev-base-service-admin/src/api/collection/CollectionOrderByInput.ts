import { SortOrder } from "../../util/SortOrder";

export type CollectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  schema?: SortOrder;
  isSchemaless?: SortOrder;
  version?: SortOrder;
  isPublic?: SortOrder;
  owner?: SortOrder;
};
