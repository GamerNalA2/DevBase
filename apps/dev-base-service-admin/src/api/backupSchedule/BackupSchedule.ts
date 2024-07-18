import { JsonValue } from "type-fest";

export type BackupSchedule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nextBackup: Date | null;
  configField: JsonValue;
  frequency: string | null;
  lastBackup: Date | null;
  retention: string | null;
};
