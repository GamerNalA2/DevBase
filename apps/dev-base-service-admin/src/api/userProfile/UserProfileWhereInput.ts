import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  id?: StringFilter;
  bio?: StringNullableFilter;
  location?: StringNullableFilter;
  website?: StringNullableFilter;
  socialLinks?: JsonFilter;
  experience?: JsonFilter;
  user?: UserWhereUniqueInput;
};
