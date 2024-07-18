import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "createdBy";

export const DocumentTitle = (record: TDocument): string => {
  return record.createdBy?.toString() || String(record.id);
};
