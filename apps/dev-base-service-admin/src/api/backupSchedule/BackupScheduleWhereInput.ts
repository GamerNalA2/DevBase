import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BackupScheduleWhereInput = {
  id?: StringFilter;
  nextBackup?: DateTimeNullableFilter;
  configField?: JsonFilter;
  frequency?: StringNullableFilter;
  lastBackup?: DateTimeNullableFilter;
  retention?: StringNullableFilter;
};
