import { ApiDocumentationWhereInput } from "./ApiDocumentationWhereInput";
import { ApiDocumentationOrderByInput } from "./ApiDocumentationOrderByInput";

export type ApiDocumentationFindManyArgs = {
  where?: ApiDocumentationWhereInput;
  orderBy?: Array<ApiDocumentationOrderByInput>;
  skip?: number;
  take?: number;
};
