import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WidgetListRelationFilter } from "../widget/WidgetListRelationFilter";

export type DashboardWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  layout?: JsonFilter;
  isPublic?: BooleanNullableFilter;
  owner?: StringNullableFilter;
  widgets?: WidgetListRelationFilter;
};
