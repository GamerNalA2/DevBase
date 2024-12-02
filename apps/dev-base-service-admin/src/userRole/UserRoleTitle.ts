import { UserRole as TUserRole } from "../api/userRole/UserRole";

export const USERROLE_TITLE_FIELD = "assignedBy";

export const UserRoleTitle = (record: TUserRole): string => {
  return record.assignedBy?.toString() || String(record.id);
};
