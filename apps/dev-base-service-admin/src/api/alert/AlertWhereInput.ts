import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AlertWhereInput = {
  id?: StringFilter;
  createdBy?: StringNullableFilter;
  condition?: JsonFilter;
  action?: JsonFilter;
  status?: StringNullableFilter;
  lastTriggered?: DateTimeNullableFilter;
};
