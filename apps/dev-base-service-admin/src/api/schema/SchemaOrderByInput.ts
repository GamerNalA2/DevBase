import { SortOrder } from "../../util/SortOrder";

export type SchemaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
  definition?: SortOrder;
  collectionId?: SortOrder;
};
