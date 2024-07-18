import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SchemaWhereUniqueInput } from "../schema/SchemaWhereUniqueInput";

export type FieldModelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  isRequired?: BooleanNullableFilter;
  defaultValue?: JsonFilter;
  constraints?: JsonFilter;
  schema?: SchemaWhereUniqueInput;
};
