import { JsonValue } from "type-fest";
import { Collection } from "../collection/Collection";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  data: JsonValue;
  version: number | null;
  createdBy: string | null;
  collection?: Collection | null;
};
