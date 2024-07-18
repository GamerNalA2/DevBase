import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { QueryWhereUniqueInput } from "../query/QueryWhereUniqueInput";

export type QueryCacheWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  expiresAt?: DateTimeNullableFilter;
  query?: QueryWhereUniqueInput;
};
