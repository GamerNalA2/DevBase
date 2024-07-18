import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSessionServiceBase } from "./base/userSession.service.base";

@Injectable()
export class UserSessionService extends UserSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
