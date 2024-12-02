import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";

export type DocumentWhereInput = {
  id?: StringFilter;
  data?: JsonFilter;
  version?: IntNullableFilter;
  createdBy?: StringNullableFilter;
  collection?: CollectionWhereUniqueInput;
};
