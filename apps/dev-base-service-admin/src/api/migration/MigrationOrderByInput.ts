import { SortOrder } from "../../util/SortOrder";

export type MigrationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  appliedAt?: SortOrder;
  version?: SortOrder;
  status?: SortOrder;
};
