import { InputJsonValue } from "../../types";

export type ChangeLogCreateInput = {
  entityType?: string | null;
  changes?: InputJsonValue;
  entity?: string | null;
  changeType?: string | null;
  version?: number | null;
  createdBy?: string | null;
  entityTypeField?: string | null;
  versionField?: number | null;
  entityField?: string | null;
  changeTypeField?: string | null;
  createdByField?: string | null;
  createdAtField?: Date | null;
  changesField?: InputJsonValue;
};
