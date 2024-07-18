import { WebSocketWhereInput } from "./WebSocketWhereInput";
import { WebSocketOrderByInput } from "./WebSocketOrderByInput";

export type WebSocketFindManyArgs = {
  where?: WebSocketWhereInput;
  orderBy?: Array<WebSocketOrderByInput>;
  skip?: number;
  take?: number;
};
