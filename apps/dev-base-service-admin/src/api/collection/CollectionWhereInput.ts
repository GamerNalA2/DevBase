import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IndexListRelationFilter } from "../index/IndexListRelationFilter";
import { DocumentListRelationFilter } from "../document/DocumentListRelationFilter";
import { SchemaListRelationFilter } from "../schema/SchemaListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { AnalyticsEventListRelationFilter } from "../analyticsEvent/AnalyticsEventListRelationFilter";

export type CollectionWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  schema?: JsonFilter;
  isSchemaless?: BooleanNullableFilter;
  version?: IntNullableFilter;
  isPublic?: BooleanNullableFilter;
  indices?: IndexListRelationFilter;
  owner?: StringNullableFilter;
  documents?: DocumentListRelationFilter;
  schemata?: SchemaListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
  analyticsEvents?: AnalyticsEventListRelationFilter;
};
