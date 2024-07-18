import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  data?: SortOrder;
  version?: SortOrder;
  createdBy?: SortOrder;
  collectionId?: SortOrder;
};
