import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  name?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  lastUsed?: DateTimeNullableFilter;
  rateLimit?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
