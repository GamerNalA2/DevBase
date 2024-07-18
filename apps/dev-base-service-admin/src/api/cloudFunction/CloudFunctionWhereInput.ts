import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CloudFunctionWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  runtime?: StringNullableFilter;
  trigger?: StringNullableFilter;
  lastExecuted?: DateTimeNullableFilter;
  environment?: JsonFilter;
  timeout?: IntNullableFilter;
  memorySize?: IntNullableFilter;
  code?: StringNullableFilter;
  version?: IntNullableFilter;
};
