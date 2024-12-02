import { SchemaWhereInput } from "./SchemaWhereInput";
import { SchemaOrderByInput } from "./SchemaOrderByInput";

export type SchemaFindManyArgs = {
  where?: SchemaWhereInput;
  orderBy?: Array<SchemaOrderByInput>;
  skip?: number;
  take?: number;
};
