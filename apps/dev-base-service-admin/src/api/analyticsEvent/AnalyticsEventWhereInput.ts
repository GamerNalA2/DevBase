import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type AnalyticsEventWhereInput = {
  id?: StringFilter;
  eventType?: StringNullableFilter;
  eventData?: JsonFilter;
  timestamp?: DateTimeNullableFilter;
  context?: JsonFilter;
  user?: UserWhereUniqueInput;
  collection?: CollectionWhereUniqueInput;
};
