import { Widget as TWidget } from "../api/widget/Widget";

export const WIDGET_TITLE_FIELD = "typeField";

export const WidgetTitle = (record: TWidget): string => {
  return record.typeField?.toString() || String(record.id);
};
