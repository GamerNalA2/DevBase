import { BackupSchedule as TBackupSchedule } from "../api/backupSchedule/BackupSchedule";

export const BACKUPSCHEDULE_TITLE_FIELD = "frequency";

export const BackupScheduleTitle = (record: TBackupSchedule): string => {
  return record.frequency?.toString() || String(record.id);
};
