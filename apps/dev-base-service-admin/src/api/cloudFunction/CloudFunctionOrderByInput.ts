import { SortOrder } from "../../util/SortOrder";

export type CloudFunctionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  runtime?: SortOrder;
  trigger?: SortOrder;
  lastExecuted?: SortOrder;
  environment?: SortOrder;
  timeout?: SortOrder;
  memorySize?: SortOrder;
  code?: SortOrder;
  version?: SortOrder;
};
