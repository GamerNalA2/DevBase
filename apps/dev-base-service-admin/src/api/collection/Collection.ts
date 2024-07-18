import { JsonValue } from "type-fest";
import { Index } from "../index/Index";
import { Document } from "../document/Document";
import { Schema } from "../schema/Schema";
import { Subscription } from "../subscription/Subscription";
import { AnalyticsEvent } from "../analyticsEvent/AnalyticsEvent";

export type Collection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  schema: JsonValue;
  isSchemaless: boolean | null;
  version: number | null;
  isPublic: boolean | null;
  indices?: Array<Index>;
  owner: string | null;
  documents?: Array<Document>;
  schemata?: Array<Schema>;
  subscriptions?: Array<Subscription>;
  analyticsEvents?: Array<AnalyticsEvent>;
};
