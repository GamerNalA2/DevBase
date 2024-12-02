import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type AuditLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  actionType: string | null;
  entityType: string | null;
  changes: JsonValue;
  timestamp: Date | null;
  ipAddress: string | null;
  entity: string | null;
  user?: User | null;
};
