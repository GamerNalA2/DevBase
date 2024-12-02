import { ApiDocumentation } from "../apiDocumentation/ApiDocumentation";

export type Endpoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  path: string | null;
  method: string | null;
  description: string | null;
  authentication: boolean | null;
  rateLimit: number | null;
  apiDocumentations?: Array<ApiDocumentation>;
};
