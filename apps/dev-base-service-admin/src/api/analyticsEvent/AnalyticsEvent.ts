import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Collection } from "../collection/Collection";

export type AnalyticsEvent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  eventType: string | null;
  eventData: JsonValue;
  timestamp: Date | null;
  context: JsonValue;
  user?: User | null;
  collection?: Collection | null;
};
