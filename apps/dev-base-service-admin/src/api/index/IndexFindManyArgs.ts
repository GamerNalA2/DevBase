import { IndexWhereInput } from "./IndexWhereInput";
import { IndexOrderByInput } from "./IndexOrderByInput";

export type IndexFindManyArgs = {
  where?: IndexWhereInput;
  orderBy?: Array<IndexOrderByInput>;
  skip?: number;
  take?: number;
};
