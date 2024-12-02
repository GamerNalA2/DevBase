import { JsonValue } from "type-fest";
import { Endpoint } from "../endpoint/Endpoint";

export type ApiDocumentation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number | null;
  updatedAtField: Date | null;
  content: JsonValue;
  createdAtField: Date | null;
  endpoint?: Endpoint | null;
};
