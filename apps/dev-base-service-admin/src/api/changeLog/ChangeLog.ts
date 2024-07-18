import { JsonValue } from "type-fest";

export type ChangeLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entityType: string | null;
  changes: JsonValue;
  entity: string | null;
  changeType: string | null;
  version: number | null;
  createdBy: string | null;
  entityTypeField: string | null;
  versionField: number | null;
  entityField: string | null;
  changeTypeField: string | null;
  createdByField: string | null;
  createdAtField: Date | null;
  changesField: JsonValue;
};
