import { ApiDocumentation as TApiDocumentation } from "../api/apiDocumentation/ApiDocumentation";

export const APIDOCUMENTATION_TITLE_FIELD = "id";

export const ApiDocumentationTitle = (record: TApiDocumentation): string => {
  return record.id?.toString() || String(record.id);
};
