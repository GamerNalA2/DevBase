import { SortOrder } from "../../util/SortOrder";

export type WidgetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  configField?: SortOrder;
  position?: SortOrder;
  dashboardId?: SortOrder;
};
