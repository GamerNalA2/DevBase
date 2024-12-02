import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  event?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  collection?: CollectionWhereUniqueInput;
  query?: QueryWhereUniqueInput;
};
