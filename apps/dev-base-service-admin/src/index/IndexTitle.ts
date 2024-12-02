import { Index as TIndex } from "../api/index/Index";

export const INDEX_TITLE_FIELD = "name";

export const IndexTitle = (record: TIndex): string => {
  return record.name?.toString() || String(record.id);
};
