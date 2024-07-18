import { JsonValue } from "type-fest";

export type Cache = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  key: string | null;
  value: JsonValue;
  ttl: number | null;
  lastAccessed: Date | null;
};
