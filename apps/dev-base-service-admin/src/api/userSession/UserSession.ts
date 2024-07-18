import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserSession = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deviceInfo: JsonValue;
  token: string | null;
  ipAddress: string | null;
  startTime: Date | null;
  endTime: Date | null;
  user?: User | null;
};
