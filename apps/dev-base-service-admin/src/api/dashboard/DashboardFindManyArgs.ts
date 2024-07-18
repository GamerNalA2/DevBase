import { DashboardWhereInput } from "./DashboardWhereInput";
import { DashboardOrderByInput } from "./DashboardOrderByInput";

export type DashboardFindManyArgs = {
  where?: DashboardWhereInput;
  orderBy?: Array<DashboardOrderByInput>;
  skip?: number;
  take?: number;
};
