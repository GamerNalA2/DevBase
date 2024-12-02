import { SortOrder } from "../../util/SortOrder";

export type DashboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  layout?: SortOrder;
  isPublic?: SortOrder;
  owner?: SortOrder;
};
