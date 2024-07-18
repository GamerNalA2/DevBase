import { Module } from "@nestjs/common";
import { RestorePointModuleBase } from "./base/restorePoint.module.base";
import { RestorePointService } from "./restorePoint.service";
import { RestorePointController } from "./restorePoint.controller";
import { RestorePointResolver } from "./restorePoint.resolver";

@Module({
  imports: [RestorePointModuleBase],
  controllers: [RestorePointController],
  providers: [RestorePointService, RestorePointResolver],
  exports: [RestorePointService],
})
export class RestorePointModule {}
