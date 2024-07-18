import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type IndexWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  fields?: JsonFilter;
  isUnique?: BooleanNullableFilter;
  collection?: CollectionWhereUniqueInput;
};
