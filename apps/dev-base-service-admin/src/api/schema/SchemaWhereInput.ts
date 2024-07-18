import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { FieldModelListRelationFilter } from "../fieldModel/FieldModelListRelationFilter";

export type SchemaWhereInput = {
  id?: StringFilter;
  version?: IntNullableFilter;
  definition?: JsonFilter;
  collection?: CollectionWhereUniqueInput;
  fields?: FieldModelListRelationFilter;
};
