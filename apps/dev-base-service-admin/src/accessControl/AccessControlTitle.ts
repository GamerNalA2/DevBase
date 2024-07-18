import { AccessControl as TAccessControl } from "../api/accessControl/AccessControl";

export const ACCESSCONTROL_TITLE_FIELD = "resourceType";

export const AccessControlTitle = (record: TAccessControl): string => {
  return record.resourceType?.toString() || String(record.id);
};
