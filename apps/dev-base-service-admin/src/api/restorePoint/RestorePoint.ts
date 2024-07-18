import { Backup } from "../backup/Backup";

export type RestorePoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  backup?: Backup | null;
  status: string | null;
  endTime: Date | null;
  restoredBy: string | null;
};
