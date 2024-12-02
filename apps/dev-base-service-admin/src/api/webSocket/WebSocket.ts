import { User } from "../user/User";

export type WebSocket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  disconnectedAt: Date | null;
  connectionId: string | null;
  status: string | null;
  connectedAt: Date | null;
  user?: User | null;
};
