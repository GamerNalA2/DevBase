import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChangeLogWhereInput = {
  id?: StringFilter;
  entityType?: StringNullableFilter;
  changes?: JsonFilter;
  entity?: StringNullableFilter;
  changeType?: StringNullableFilter;
  version?: IntNullableFilter;
  createdBy?: StringNullableFilter;
  entityTypeField?: StringNullableFilter;
  versionField?: IntNullableFilter;
  entityField?: StringNullableFilter;
  changeTypeField?: StringNullableFilter;
  createdByField?: StringNullableFilter;
  createdAtField?: DateTimeNullableFilter;
  changesField?: JsonFilter;
};
