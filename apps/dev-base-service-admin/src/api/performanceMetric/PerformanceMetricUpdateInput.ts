import { InputJsonValue } from "../../types";

export type PerformanceMetricUpdateInput = {
  metricName?: string | null;
  value?: number | null;
  timestamp?: Date | null;
  context?: InputJsonValue;
};
