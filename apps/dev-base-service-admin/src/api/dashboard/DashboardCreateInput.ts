import { InputJsonValue } from "../../types";
import { WidgetCreateNestedManyWithoutDashboardsInput } from "./WidgetCreateNestedManyWithoutDashboardsInput";

export type DashboardCreateInput = {
  name?: string | null;
  layout?: InputJsonValue;
  isPublic?: boolean | null;
  owner?: string | null;
  widgets?: WidgetCreateNestedManyWithoutDashboardsInput;
};
