import { BackupWhereInput } from "./BackupWhereInput";
import { BackupOrderByInput } from "./BackupOrderByInput";

export type BackupFindManyArgs = {
  where?: BackupWhereInput;
  orderBy?: Array<BackupOrderByInput>;
  skip?: number;
  take?: number;
};
