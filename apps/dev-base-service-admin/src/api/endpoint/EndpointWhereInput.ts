import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ApiDocumentationListRelationFilter } from "../apiDocumentation/ApiDocumentationListRelationFilter";

export type EndpointWhereInput = {
  id?: StringFilter;
  path?: StringNullableFilter;
  method?: StringNullableFilter;
  description?: StringNullableFilter;
  authentication?: BooleanNullableFilter;
  rateLimit?: IntNullableFilter;
  apiDocumentations?: ApiDocumentationListRelationFilter;
};
