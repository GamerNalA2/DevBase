import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DashboardWhereUniqueInput } from "../dashboard/DashboardWhereUniqueInput";

export type WidgetWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  configField?: JsonFilter;
  position?: JsonFilter;
  dashboard?: DashboardWhereUniqueInput;
};
