import { UserRole } from "../userRole/UserRole";
import { AccessControl } from "../accessControl/AccessControl";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userRoles?: Array<UserRole>;
  accessControls?: Array<AccessControl>;
};
