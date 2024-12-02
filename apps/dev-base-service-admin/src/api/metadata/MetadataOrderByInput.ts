import { SortOrder } from "../../util/SortOrder";

export type MetadataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dataType?: SortOrder;
  entityType?: SortOrder;
  entityField?: SortOrder;
  key?: SortOrder;
  value?: SortOrder;
};
