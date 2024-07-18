import { JsonValue } from "type-fest";

export type CloudFunction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  runtime: string | null;
  trigger: string | null;
  lastExecuted: Date | null;
  environment: JsonValue;
  timeout: number | null;
  memorySize: number | null;
  code: string | null;
  version: number | null;
};
