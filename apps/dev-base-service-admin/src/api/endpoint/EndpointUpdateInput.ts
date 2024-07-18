import { ApiDocumentationUpdateManyWithoutEndpointsInput } from "./ApiDocumentationUpdateManyWithoutEndpointsInput";

export type EndpointUpdateInput = {
  path?: string | null;
  method?: string | null;
  description?: string | null;
  authentication?: boolean | null;
  rateLimit?: number | null;
  apiDocumentations?: ApiDocumentationUpdateManyWithoutEndpointsInput;
};
