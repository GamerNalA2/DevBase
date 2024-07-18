import { Collection as TCollection } from "../api/collection/Collection";

export const COLLECTION_TITLE_FIELD = "owner";

export const CollectionTitle = (record: TCollection): string => {
  return record.owner?.toString() || String(record.id);
};
