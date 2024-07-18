import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EndpointWhereUniqueInput } from "../endpoint/EndpointWhereUniqueInput";

export type ApiDocumentationWhereInput = {
  id?: StringFilter;
  version?: IntNullableFilter;
  updatedAtField?: DateTimeNullableFilter;
  content?: JsonFilter;
  createdAtField?: DateTimeNullableFilter;
  endpoint?: EndpointWhereUniqueInput;
};
