import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RateLimiterWhereInput = {
  id?: StringFilter;
  resourceType?: StringNullableFilter;
  resource?: StringNullableFilter;
  limit?: IntNullableFilter;
  window?: IntNullableFilter;
  current?: IntNullableFilter;
  lastReset?: DateTimeNullableFilter;
};
