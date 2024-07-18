import { InputJsonValue } from "../../types";
import { IndexUpdateManyWithoutCollectionsInput } from "./IndexUpdateManyWithoutCollectionsInput";
import { DocumentUpdateManyWithoutCollectionsInput } from "./DocumentUpdateManyWithoutCollectionsInput";
import { SchemaUpdateManyWithoutCollectionsInput } from "./SchemaUpdateManyWithoutCollectionsInput";
import { SubscriptionUpdateManyWithoutCollectionsInput } from "./SubscriptionUpdateManyWithoutCollectionsInput";
import { AnalyticsEventUpdateManyWithoutCollectionsInput } from "./AnalyticsEventUpdateManyWithoutCollectionsInput";

export type CollectionUpdateInput = {
  description?: string | null;
  schema?: InputJsonValue;
  isSchemaless?: boolean | null;
  version?: number | null;
  isPublic?: boolean | null;
  indices?: IndexUpdateManyWithoutCollectionsInput;
  owner?: string | null;
  documents?: DocumentUpdateManyWithoutCollectionsInput;
  schemata?: SchemaUpdateManyWithoutCollectionsInput;
  subscriptions?: SubscriptionUpdateManyWithoutCollectionsInput;
  analyticsEvents?: AnalyticsEventUpdateManyWithoutCollectionsInput;
};
