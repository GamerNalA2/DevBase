import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserRoleWhereInput = {
  id?: StringFilter;
  assignedAt?: DateTimeNullableFilter;
  assignedBy?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  role?: RoleWhereUniqueInput;
};
