import { Module } from "@nestjs/common";
import { BackupScheduleModuleBase } from "./base/backupSchedule.module.base";
import { BackupScheduleService } from "./backupSchedule.service";
import { BackupScheduleController } from "./backupSchedule.controller";
import { BackupScheduleResolver } from "./backupSchedule.resolver";

@Module({
  imports: [BackupScheduleModuleBase],
  controllers: [BackupScheduleController],
  providers: [BackupScheduleService, BackupScheduleResolver],
  exports: [BackupScheduleService],
})
export class BackupScheduleModule {}
