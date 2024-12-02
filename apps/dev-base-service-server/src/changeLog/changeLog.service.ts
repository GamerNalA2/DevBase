import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChangeLogServiceBase } from "./base/changeLog.service.base";

@Injectable()
export class ChangeLogService extends ChangeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
