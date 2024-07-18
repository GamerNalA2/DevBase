import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketWhereInput = {
  id?: StringFilter;
  disconnectedAt?: DateTimeNullableFilter;
  connectionId?: StringNullableFilter;
  status?: StringNullableFilter;
  connectedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
