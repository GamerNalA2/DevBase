import { InputJsonValue } from "../../types";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { FieldModelCreateNestedManyWithoutSchemataInput } from "./FieldModelCreateNestedManyWithoutSchemataInput";

export type SchemaCreateInput = {
  version?: number | null;
  definition?: InputJsonValue;
  collection?: CollectionWhereUniqueInput | null;
  fields?: FieldModelCreateNestedManyWithoutSchemataInput;
};
