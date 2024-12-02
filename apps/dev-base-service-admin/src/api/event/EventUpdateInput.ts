import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  typeField?: string | null;
  data?: InputJsonValue;
  timestamp?: Date | null;
  originatorId?: string | null;
  originatorType?: string | null;
};
