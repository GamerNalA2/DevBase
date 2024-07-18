import { Endpoint as TEndpoint } from "../api/endpoint/Endpoint";

export const ENDPOINT_TITLE_FIELD = "path";

export const EndpointTitle = (record: TEndpoint): string => {
  return record.path?.toString() || String(record.id);
};
