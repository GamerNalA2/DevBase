import { InputJsonValue } from "../../types";

export type AlertUpdateInput = {
  createdBy?: string | null;
  condition?: InputJsonValue;
  action?: InputJsonValue;
  status?: string | null;
  lastTriggered?: Date | null;
};
