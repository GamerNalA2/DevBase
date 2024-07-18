import { JsonValue } from "type-fest";

export type PerformanceMetric = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  metricName: string | null;
  value: number | null;
  timestamp: Date | null;
  context: JsonValue;
};
