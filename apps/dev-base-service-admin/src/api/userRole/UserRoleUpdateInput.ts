import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserRoleUpdateInput = {
  assignedAt?: Date | null;
  assignedBy?: string | null;
  user?: UserWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
};
