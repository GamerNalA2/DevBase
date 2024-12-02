import { Dashboard as TDashboard } from "../api/dashboard/Dashboard";

export const DASHBOARD_TITLE_FIELD = "name";

export const DashboardTitle = (record: TDashboard): string => {
  return record.name?.toString() || String(record.id);
};
