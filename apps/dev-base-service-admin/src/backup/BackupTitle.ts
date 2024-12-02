import { Backup as TBackup } from "../api/backup/Backup";

export const BACKUP_TITLE_FIELD = "id";

export const BackupTitle = (record: TBackup): string => {
  return record.id?.toString() || String(record.id);
};
