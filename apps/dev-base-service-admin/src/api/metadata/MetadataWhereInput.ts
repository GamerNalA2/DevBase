import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MetadataWhereInput = {
  id?: StringFilter;
  dataType?: StringNullableFilter;
  entityType?: StringNullableFilter;
  entityField?: StringNullableFilter;
  key?: StringNullableFilter;
  value?: JsonFilter;
};
