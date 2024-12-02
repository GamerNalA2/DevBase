import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type SubscriptionCreateInput = {
  event?: string | null;
  user?: UserWhereUniqueInput | null;
  collection?: CollectionWhereUniqueInput | null;
  query?: QueryWhereUniqueInput | null;
};
