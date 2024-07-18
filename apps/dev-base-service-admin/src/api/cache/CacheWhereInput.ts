import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CacheWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  value?: JsonFilter;
  ttl?: IntNullableFilter;
  lastAccessed?: DateTimeNullableFilter;
};
