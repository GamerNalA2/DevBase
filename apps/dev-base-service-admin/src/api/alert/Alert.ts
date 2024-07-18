import { JsonValue } from "type-fest";

export type Alert = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  condition: JsonValue;
  action: JsonValue;
  status: string | null;
  lastTriggered: Date | null;
};
