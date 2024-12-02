import { CloudFunctionWhereInput } from "./CloudFunctionWhereInput";
import { CloudFunctionOrderByInput } from "./CloudFunctionOrderByInput";

export type CloudFunctionFindManyArgs = {
  where?: CloudFunctionWhereInput;
  orderBy?: Array<CloudFunctionOrderByInput>;
  skip?: number;
  take?: number;
};
