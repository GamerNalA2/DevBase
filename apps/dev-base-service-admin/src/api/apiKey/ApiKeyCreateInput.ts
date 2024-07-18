import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiKeyCreateInput = {
  key?: string | null;
  name?: string | null;
  scopes?: Array<"Option1">;
  expiresAt?: Date | null;
  lastUsed?: Date | null;
  rateLimit?: number | null;
  user?: UserWhereUniqueInput | null;
};
