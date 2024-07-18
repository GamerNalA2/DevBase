import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebSocketServiceBase } from "./base/webSocket.service.base";

@Injectable()
export class WebSocketService extends WebSocketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
