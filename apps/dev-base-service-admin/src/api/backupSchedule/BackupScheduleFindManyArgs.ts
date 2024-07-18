import { BackupScheduleWhereInput } from "./BackupScheduleWhereInput";
import { BackupScheduleOrderByInput } from "./BackupScheduleOrderByInput";

export type BackupScheduleFindManyArgs = {
  where?: BackupScheduleWhereInput;
  orderBy?: Array<BackupScheduleOrderByInput>;
  skip?: number;
  take?: number;
};
