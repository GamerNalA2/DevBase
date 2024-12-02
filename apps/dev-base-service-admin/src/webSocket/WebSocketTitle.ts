import { WebSocket as TWebSocket } from "../api/webSocket/WebSocket";

export const WEBSOCKET_TITLE_FIELD = "connectionId";

export const WebSocketTitle = (record: TWebSocket): string => {
  return record.connectionId?.toString() || String(record.id);
};
