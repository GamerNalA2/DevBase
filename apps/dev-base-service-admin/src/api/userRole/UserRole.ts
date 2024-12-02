import { User } from "../user/User";
import { Role } from "../role/Role";

export type UserRole = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  assignedAt: Date | null;
  assignedBy: string | null;
  user?: User | null;
  role?: Role | null;
};
