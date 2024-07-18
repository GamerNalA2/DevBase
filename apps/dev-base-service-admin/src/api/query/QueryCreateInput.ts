import { SubscriptionCreateNestedManyWithoutQueriesInput } from "./SubscriptionCreateNestedManyWithoutQueriesInput";
import { QueryCacheCreateNestedManyWithoutQueriesInput } from "./QueryCacheCreateNestedManyWithoutQueriesInput";

export type QueryCreateInput = {
  subscriptions?: SubscriptionCreateNestedManyWithoutQueriesInput;
  queryCaches?: QueryCacheCreateNestedManyWithoutQueriesInput;
};
