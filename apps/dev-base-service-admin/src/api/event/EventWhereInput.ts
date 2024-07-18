import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  data?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
  originatorId?: StringNullableFilter;
  originatorType?: StringNullableFilter;
};
