import { InputJsonValue } from "../../types";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type AccessControlUpdateInput = {
  resourceType?: string | null;
  permissions?: InputJsonValue;
  resource?: string | null;
  role?: RoleWhereUniqueInput | null;
  resourceTypeField?: string | null;
  permissionsField?: InputJsonValue;
  resourceField?: string | null;
  roleField?: string | null;
};
