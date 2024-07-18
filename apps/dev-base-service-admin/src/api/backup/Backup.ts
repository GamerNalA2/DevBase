import { RestorePoint } from "../restorePoint/RestorePoint";

export type Backup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  restorePoints?: Array<RestorePoint>;
};
