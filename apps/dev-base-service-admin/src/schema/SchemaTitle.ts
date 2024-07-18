import { Schema as TSchema } from "../api/schema/Schema";

export const SCHEMA_TITLE_FIELD = "id";

export const SchemaTitle = (record: TSchema): string => {
  return record.id?.toString() || String(record.id);
};
