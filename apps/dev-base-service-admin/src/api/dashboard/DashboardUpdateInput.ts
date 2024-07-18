import { InputJsonValue } from "../../types";
import { WidgetUpdateManyWithoutDashboardsInput } from "./WidgetUpdateManyWithoutDashboardsInput";

export type DashboardUpdateInput = {
  name?: string | null;
  layout?: InputJsonValue;
  isPublic?: boolean | null;
  owner?: string | null;
  widgets?: WidgetUpdateManyWithoutDashboardsInput;
};
