import { SortOrder } from "../../util/SortOrder";

export type PerformanceMetricOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  metricName?: SortOrder;
  value?: SortOrder;
  timestamp?: SortOrder;
  context?: SortOrder;
};
