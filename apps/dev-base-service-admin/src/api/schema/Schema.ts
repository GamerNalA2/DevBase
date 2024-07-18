import { JsonValue } from "type-fest";
import { Collection } from "../collection/Collection";
import { FieldModel } from "../fieldModel/FieldModel";

export type Schema = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number | null;
  definition: JsonValue;
  collection?: Collection | null;
  fields?: Array<FieldModel>;
};
