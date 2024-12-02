import { AnalyticsEvent as TAnalyticsEvent } from "../api/analyticsEvent/AnalyticsEvent";

export const ANALYTICSEVENT_TITLE_FIELD = "eventType";

export const AnalyticsEventTitle = (record: TAnalyticsEvent): string => {
  return record.eventType?.toString() || String(record.id);
};
