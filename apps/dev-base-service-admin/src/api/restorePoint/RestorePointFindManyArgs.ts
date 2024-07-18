import { RestorePointWhereInput } from "./RestorePointWhereInput";
import { RestorePointOrderByInput } from "./RestorePointOrderByInput";

export type RestorePointFindManyArgs = {
  where?: RestorePointWhereInput;
  orderBy?: Array<RestorePointOrderByInput>;
  skip?: number;
  take?: number;
};
