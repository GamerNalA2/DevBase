import { RestorePoint as TRestorePoint } from "../api/restorePoint/RestorePoint";

export const RESTOREPOINT_TITLE_FIELD = "status";

export const RestorePointTitle = (record: TRestorePoint): string => {
  return record.status?.toString() || String(record.id);
};
