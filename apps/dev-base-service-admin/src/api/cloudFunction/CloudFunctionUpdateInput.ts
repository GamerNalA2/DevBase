import { InputJsonValue } from "../../types";

export type CloudFunctionUpdateInput = {
  name?: string | null;
  runtime?: string | null;
  trigger?: string | null;
  lastExecuted?: Date | null;
  environment?: InputJsonValue;
  timeout?: number | null;
  memorySize?: number | null;
  code?: string | null;
  version?: number | null;
};
