import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PerformanceMetricWhereInput = {
  id?: StringFilter;
  metricName?: StringNullableFilter;
  value?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
  context?: JsonFilter;
};
