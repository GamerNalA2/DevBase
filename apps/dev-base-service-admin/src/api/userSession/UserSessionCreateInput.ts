import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSessionCreateInput = {
  deviceInfo?: InputJsonValue;
  token?: string | null;
  ipAddress?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
