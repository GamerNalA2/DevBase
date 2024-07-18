import { JsonValue } from "type-fest";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  data: JsonValue;
  timestamp: Date | null;
  originatorId: string | null;
  originatorType: string | null;
};
