import { User } from "../user/User";

export type ApiKey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  key: string | null;
  name: string | null;
  scopes?: Array<"Option1">;
  expiresAt: Date | null;
  lastUsed: Date | null;
  rateLimit: number | null;
  user?: User | null;
};
