import { QueryCacheWhereInput } from "./QueryCacheWhereInput";
import { QueryCacheOrderByInput } from "./QueryCacheOrderByInput";

export type QueryCacheFindManyArgs = {
  where?: QueryCacheWhereInput;
  orderBy?: Array<QueryCacheOrderByInput>;
  skip?: number;
  take?: number;
};
