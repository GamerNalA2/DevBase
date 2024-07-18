import { InputJsonValue } from "../../types";
import { SchemaWhereUniqueInput } from "../schema/SchemaWhereUniqueInput";

export type FieldModelCreateInput = {
  name?: string | null;
  typeField?: string | null;
  isRequired?: boolean | null;
  defaultValue?: InputJsonValue;
  constraints?: InputJsonValue;
  schema?: SchemaWhereUniqueInput | null;
};
