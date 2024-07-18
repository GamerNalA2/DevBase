import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";
import { AccessControlCreateNestedManyWithoutRolesInput } from "./AccessControlCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
  accessControls?: AccessControlCreateNestedManyWithoutRolesInput;
};
