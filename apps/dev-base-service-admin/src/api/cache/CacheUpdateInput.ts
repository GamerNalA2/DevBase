import { InputJsonValue } from "../../types";

export type CacheUpdateInput = {
  key?: string | null;
  value?: InputJsonValue;
  ttl?: number | null;
  lastAccessed?: Date | null;
};
