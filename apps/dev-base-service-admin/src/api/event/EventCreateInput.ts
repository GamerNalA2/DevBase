import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  typeField?: string | null;
  data?: InputJsonValue;
  timestamp?: Date | null;
  originatorId?: string | null;
  originatorType?: string | null;
};
