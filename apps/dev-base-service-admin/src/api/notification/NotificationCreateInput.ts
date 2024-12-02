import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  typeField?: string | null;
  content?: InputJsonValue;
  isRead?: boolean | null;
  createdAtField?: Date | null;
  user?: UserWhereUniqueInput | null;
};
