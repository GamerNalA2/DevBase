import { SortOrder } from "../../util/SortOrder";

export type IndexOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  fields?: SortOrder;
  isUnique?: SortOrder;
  collectionId?: SortOrder;
};
