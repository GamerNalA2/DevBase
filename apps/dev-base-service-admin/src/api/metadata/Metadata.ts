import { JsonValue } from "type-fest";

export type Metadata = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dataType: string | null;
  entityType: string | null;
  entityField: string | null;
  key: string | null;
  value: JsonValue;
};
