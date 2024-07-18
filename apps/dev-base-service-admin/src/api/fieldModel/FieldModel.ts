import { JsonValue } from "type-fest";
import { Schema } from "../schema/Schema";

export type FieldModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField: string | null;
  isRequired: boolean | null;
  defaultValue: JsonValue;
  constraints: JsonValue;
  schema?: Schema | null;
};
