import { ChangeLog as TChangeLog } from "../api/changeLog/ChangeLog";

export const CHANGELOG_TITLE_FIELD = "entityType";

export const ChangeLogTitle = (record: TChangeLog): string => {
  return record.entityType?.toString() || String(record.id);
};
