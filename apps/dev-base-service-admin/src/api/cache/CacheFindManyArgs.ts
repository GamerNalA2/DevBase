import { CacheWhereInput } from "./CacheWhereInput";
import { CacheOrderByInput } from "./CacheOrderByInput";

export type CacheFindManyArgs = {
  where?: CacheWhereInput;
  orderBy?: Array<CacheOrderByInput>;
  skip?: number;
  take?: number;
};
