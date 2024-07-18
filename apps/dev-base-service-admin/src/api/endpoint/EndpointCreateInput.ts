import { ApiDocumentationCreateNestedManyWithoutEndpointsInput } from "./ApiDocumentationCreateNestedManyWithoutEndpointsInput";

export type EndpointCreateInput = {
  path?: string | null;
  method?: string | null;
  description?: string | null;
  authentication?: boolean | null;
  rateLimit?: number | null;
  apiDocumentations?: ApiDocumentationCreateNestedManyWithoutEndpointsInput;
};
