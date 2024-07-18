import { InputJsonValue } from "../../types";

export type CacheCreateInput = {
  key?: string | null;
  value?: InputJsonValue;
  ttl?: number | null;
  lastAccessed?: Date | null;
};
