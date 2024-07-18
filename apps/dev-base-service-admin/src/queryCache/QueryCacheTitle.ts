import { QueryCache as TQueryCache } from "../api/queryCache/QueryCache";

export const QUERYCACHE_TITLE_FIELD = "id";

export const QueryCacheTitle = (record: TQueryCache): string => {
  return record.id?.toString() || String(record.id);
};
