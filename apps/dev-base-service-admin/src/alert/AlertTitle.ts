import { Alert as TAlert } from "../api/alert/Alert";

export const ALERT_TITLE_FIELD = "createdBy";

export const AlertTitle = (record: TAlert): string => {
  return record.createdBy?.toString() || String(record.id);
};
