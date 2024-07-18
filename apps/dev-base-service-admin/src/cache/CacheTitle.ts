import { Cache as TCache } from "../api/cache/Cache";

export const CACHE_TITLE_FIELD = "key";

export const CacheTitle = (record: TCache): string => {
  return record.key?.toString() || String(record.id);
};
