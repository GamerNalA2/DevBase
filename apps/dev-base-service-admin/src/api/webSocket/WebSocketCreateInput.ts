import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebSocketCreateInput = {
  disconnectedAt?: Date | null;
  connectionId?: string | null;
  status?: string | null;
  connectedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
