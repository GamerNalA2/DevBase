import { BackupWhereUniqueInput } from "../backup/BackupWhereUniqueInput";

export type RestorePointUpdateInput = {
  startTime?: Date | null;
  backup?: BackupWhereUniqueInput | null;
  status?: string | null;
  endTime?: Date | null;
  restoredBy?: string | null;
};
