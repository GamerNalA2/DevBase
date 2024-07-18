import { Module } from "@nestjs/common";
import { BackupModuleBase } from "./base/backup.module.base";
import { BackupService } from "./backup.service";
import { BackupController } from "./backup.controller";
import { BackupResolver } from "./backup.resolver";

@Module({
  imports: [BackupModuleBase],
  controllers: [BackupController],
  providers: [BackupService, BackupResolver],
  exports: [BackupService],
})
export class BackupModule {}
