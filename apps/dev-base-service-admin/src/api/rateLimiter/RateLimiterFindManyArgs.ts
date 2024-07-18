import { RateLimiterWhereInput } from "./RateLimiterWhereInput";
import { RateLimiterOrderByInput } from "./RateLimiterOrderByInput";

export type RateLimiterFindManyArgs = {
  where?: RateLimiterWhereInput;
  orderBy?: Array<RateLimiterOrderByInput>;
  skip?: number;
  take?: number;
};
