import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BackupWhereUniqueInput } from "../backup/BackupWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RestorePointWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  backup?: BackupWhereUniqueInput;
  status?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  restoredBy?: StringNullableFilter;
};
