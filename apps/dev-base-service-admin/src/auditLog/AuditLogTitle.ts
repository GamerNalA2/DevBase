import { AuditLog as TAuditLog } from "../api/auditLog/AuditLog";

export const AUDITLOG_TITLE_FIELD = "actionType";

export const AuditLogTitle = (record: TAuditLog): string => {
  return record.actionType?.toString() || String(record.id);
};
