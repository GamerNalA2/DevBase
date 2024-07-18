import { InputJsonValue } from "../../types";

export type BackupScheduleUpdateInput = {
  nextBackup?: Date | null;
  configField?: InputJsonValue;
  frequency?: string | null;
  lastBackup?: Date | null;
  retention?: string | null;
};
