import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BackupScheduleServiceBase } from "./base/backupSchedule.service.base";

@Injectable()
export class BackupScheduleService extends BackupScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
