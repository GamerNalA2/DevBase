import { ChangeLogWhereInput } from "./ChangeLogWhereInput";
import { ChangeLogOrderByInput } from "./ChangeLogOrderByInput";

export type ChangeLogFindManyArgs = {
  where?: ChangeLogWhereInput;
  orderBy?: Array<ChangeLogOrderByInput>;
  skip?: number;
  take?: number;
};
