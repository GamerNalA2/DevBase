import { InputJsonValue } from "../../types";

export type MetadataCreateInput = {
  dataType?: string | null;
  entityType?: string | null;
  entityField?: string | null;
  key?: string | null;
  value?: InputJsonValue;
};
