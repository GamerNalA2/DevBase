import { InputJsonValue } from "../../types";

export type PerformanceMetricCreateInput = {
  metricName?: string | null;
  value?: number | null;
  timestamp?: Date | null;
  context?: InputJsonValue;
};
