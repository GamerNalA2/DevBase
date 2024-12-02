import { Module } from "@nestjs/common";
import { WebSocketModuleBase } from "./base/webSocket.module.base";
import { WebSocketService } from "./webSocket.service";
import { WebSocketController } from "./webSocket.controller";
import { WebSocketResolver } from "./webSocket.resolver";

@Module({
  imports: [WebSocketModuleBase],
  controllers: [WebSocketController],
  providers: [WebSocketService, WebSocketResolver],
  exports: [WebSocketService],
})
export class WebSocketModule {}
