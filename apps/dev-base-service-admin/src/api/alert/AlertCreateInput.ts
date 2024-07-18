import { InputJsonValue } from "../../types";

export type AlertCreateInput = {
  createdBy?: string | null;
  condition?: InputJsonValue;
  action?: InputJsonValue;
  status?: string | null;
  lastTriggered?: Date | null;
};
