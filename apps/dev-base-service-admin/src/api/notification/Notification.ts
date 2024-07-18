import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  content: JsonValue;
  isRead: boolean | null;
  createdAtField: Date | null;
  user?: User | null;
};
