import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogUpdateInput = {
  actionType?: string | null;
  entityType?: string | null;
  changes?: InputJsonValue;
  timestamp?: Date | null;
  ipAddress?: string | null;
  entity?: string | null;
  user?: UserWhereUniqueInput | null;
};
