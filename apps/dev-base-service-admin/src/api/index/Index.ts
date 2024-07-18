import { JsonValue } from "type-fest";
import { Collection } from "../collection/Collection";

export type Index = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  fields: JsonValue;
  isUnique: boolean | null;
  collection?: Collection | null;
};
