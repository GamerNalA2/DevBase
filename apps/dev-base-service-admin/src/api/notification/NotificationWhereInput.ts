import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  content?: JsonFilter;
  isRead?: BooleanNullableFilter;
  createdAtField?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
