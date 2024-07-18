import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";
import { AccessControlUpdateManyWithoutRolesInput } from "./AccessControlUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
  accessControls?: AccessControlUpdateManyWithoutRolesInput;
};
