import { Metadata as TMetadata } from "../api/metadata/Metadata";

export const METADATA_TITLE_FIELD = "dataType";

export const MetadataTitle = (record: TMetadata): string => {
  return record.dataType?.toString() || String(record.id);
};
