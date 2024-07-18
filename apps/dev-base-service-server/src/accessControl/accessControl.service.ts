import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessControlServiceBase } from "./base/accessControl.service.base";

@Injectable()
export class AccessControlService extends AccessControlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
