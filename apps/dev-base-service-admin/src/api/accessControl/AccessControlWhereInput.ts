import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type AccessControlWhereInput = {
  id?: StringFilter;
  resourceType?: StringNullableFilter;
  permissions?: JsonFilter;
  resource?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  resourceTypeField?: StringNullableFilter;
  permissionsField?: JsonFilter;
  resourceField?: StringNullableFilter;
  roleField?: StringNullableFilter;
};
