import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { QueryCacheListRelationFilter } from "../queryCache/QueryCacheListRelationFilter";

export type QueryWhereInput = {
  id?: StringFilter;
  subscriptions?: SubscriptionListRelationFilter;
  queryCaches?: QueryCacheListRelationFilter;
};
