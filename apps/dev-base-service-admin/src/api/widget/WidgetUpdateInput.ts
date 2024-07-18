import { InputJsonValue } from "../../types";
import { DashboardWhereUniqueInput } from "../dashboard/DashboardWhereUniqueInput";

export type WidgetUpdateInput = {
  typeField?: string | null;
  configField?: InputJsonValue;
  position?: InputJsonValue;
  dashboard?: DashboardWhereUniqueInput | null;
};
