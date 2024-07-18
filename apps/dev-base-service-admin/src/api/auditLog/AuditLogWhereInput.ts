import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogWhereInput = {
  id?: StringFilter;
  actionType?: StringNullableFilter;
  entityType?: StringNullableFilter;
  changes?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
  ipAddress?: StringNullableFilter;
  entity?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
