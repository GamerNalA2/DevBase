import { Migration as TMigration } from "../api/migration/Migration";

export const MIGRATION_TITLE_FIELD = "name";

export const MigrationTitle = (record: TMigration): string => {
  return record.name?.toString() || String(record.id);
};
