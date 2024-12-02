import { InputJsonValue } from "../../types";
import { IndexCreateNestedManyWithoutCollectionsInput } from "./IndexCreateNestedManyWithoutCollectionsInput";
import { DocumentCreateNestedManyWithoutCollectionsInput } from "./DocumentCreateNestedManyWithoutCollectionsInput";
import { SchemaCreateNestedManyWithoutCollectionsInput } from "./SchemaCreateNestedManyWithoutCollectionsInput";
import { SubscriptionCreateNestedManyWithoutCollectionsInput } from "./SubscriptionCreateNestedManyWithoutCollectionsInput";
import { AnalyticsEventCreateNestedManyWithoutCollectionsInput } from "./AnalyticsEventCreateNestedManyWithoutCollectionsInput";

export type CollectionCreateInput = {
  description?: string | null;
  schema?: InputJsonValue;
  isSchemaless?: boolean | null;
  version?: number | null;
  isPublic?: boolean | null;
  indices?: IndexCreateNestedManyWithoutCollectionsInput;
  owner?: string | null;
  documents?: DocumentCreateNestedManyWithoutCollectionsInput;
  schemata?: SchemaCreateNestedManyWithoutCollectionsInput;
  subscriptions?: SubscriptionCreateNestedManyWithoutCollectionsInput;
  analyticsEvents?: AnalyticsEventCreateNestedManyWithoutCollectionsInput;
};
