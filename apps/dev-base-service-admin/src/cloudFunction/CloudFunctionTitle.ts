import { CloudFunction as TCloudFunction } from "../api/cloudFunction/CloudFunction";

export const CLOUDFUNCTION_TITLE_FIELD = "name";

export const CloudFunctionTitle = (record: TCloudFunction): string => {
  return record.name?.toString() || String(record.id);
};
