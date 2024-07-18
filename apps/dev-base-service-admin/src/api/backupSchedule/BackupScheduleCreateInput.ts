import { InputJsonValue } from "../../types";

export type BackupScheduleCreateInput = {
  nextBackup?: Date | null;
  configField?: InputJsonValue;
  frequency?: string | null;
  lastBackup?: Date | null;
  retention?: string | null;
};
