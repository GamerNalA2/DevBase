import { StringFilter } from "../../util/StringFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";
import { AccessControlListRelationFilter } from "../accessControl/AccessControlListRelationFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  userRoles?: UserRoleListRelationFilter;
  accessControls?: AccessControlListRelationFilter;
};
