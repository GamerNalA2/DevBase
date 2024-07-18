import { Module } from "@nestjs/common";
import { ChangeLogModuleBase } from "./base/changeLog.module.base";
import { ChangeLogService } from "./changeLog.service";
import { ChangeLogController } from "./changeLog.controller";
import { ChangeLogResolver } from "./changeLog.resolver";

@Module({
  imports: [ChangeLogModuleBase],
  controllers: [ChangeLogController],
  providers: [ChangeLogService, ChangeLogResolver],
  exports: [ChangeLogService],
})
export class ChangeLogModule {}
