import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebSocketService } from "./webSocket.service";
import { WebSocketControllerBase } from "./base/webSocket.controller.base";

@swagger.ApiTags("webSockets")
@common.Controller("webSockets")
export class WebSocketController extends WebSocketControllerBase {
  constructor(protected readonly service: WebSocketService) {
    super(service);
  }
}
