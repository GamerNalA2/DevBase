import { JsonValue } from "type-fest";
import { Query } from "../query/Query";

export type QueryCache = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  result: JsonValue;
  expiresAt: Date | null;
  query?: Query | null;
};
