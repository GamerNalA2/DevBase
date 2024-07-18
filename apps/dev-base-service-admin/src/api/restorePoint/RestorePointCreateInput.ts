import { BackupWhereUniqueInput } from "../backup/BackupWhereUniqueInput";

export type RestorePointCreateInput = {
  startTime?: Date | null;
  backup?: BackupWhereUniqueInput | null;
  status?: string | null;
  endTime?: Date | null;
  restoredBy?: string | null;
};
