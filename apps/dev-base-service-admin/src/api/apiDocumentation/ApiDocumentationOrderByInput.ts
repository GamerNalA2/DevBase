import { SortOrder } from "../../util/SortOrder";

export type ApiDocumentationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
  updatedAtField?: SortOrder;
  content?: SortOrder;
  createdAtField?: SortOrder;
  endpointId?: SortOrder;
};
