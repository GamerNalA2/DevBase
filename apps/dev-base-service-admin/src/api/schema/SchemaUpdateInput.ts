import { InputJsonValue } from "../../types";
import { CollectionWhereUniqueInput } from "../collection/CollectionWhereUniqueInput";
import { FieldModelUpdateManyWithoutSchemataInput } from "./FieldModelUpdateManyWithoutSchemataInput";

export type SchemaUpdateInput = {
  version?: number | null;
  definition?: InputJsonValue;
  collection?: CollectionWhereUniqueInput | null;
  fields?: FieldModelUpdateManyWithoutSchemataInput;
};
