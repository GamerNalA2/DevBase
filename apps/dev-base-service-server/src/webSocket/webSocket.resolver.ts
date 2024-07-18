import * as graphql from "@nestjs/graphql";
import { WebSocketResolverBase } from "./base/webSocket.resolver.base";
import { WebSocket } from "./base/WebSocket";
import { WebSocketService } from "./webSocket.service";

@graphql.Resolver(() => WebSocket)
export class WebSocketResolver extends WebSocketResolverBase {
  constructor(protected readonly service: WebSocketService) {
    super(service);
  }
}
