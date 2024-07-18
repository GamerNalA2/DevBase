import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestorePointServiceBase } from "./base/restorePoint.service.base";

@Injectable()
export class RestorePointService extends RestorePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
