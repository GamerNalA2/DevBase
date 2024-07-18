import { SubscriptionUpdateManyWithoutQueriesInput } from "./SubscriptionUpdateManyWithoutQueriesInput";
import { QueryCacheUpdateManyWithoutQueriesInput } from "./QueryCacheUpdateManyWithoutQueriesInput";

export type QueryUpdateInput = {
  subscriptions?: SubscriptionUpdateManyWithoutQueriesInput;
  queryCaches?: QueryCacheUpdateManyWithoutQueriesInput;
};
