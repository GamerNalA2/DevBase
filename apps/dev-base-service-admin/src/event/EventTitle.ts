import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "typeField";

export const EventTitle = (record: TEvent): string => {
  return record.typeField?.toString() || String(record.id);
};
