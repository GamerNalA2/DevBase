import { Module } from "@nestjs/common";
import { AccessControlModuleBase } from "./base/accessControl.module.base";
import { AccessControlService } from "./accessControl.service";
import { AccessControlController } from "./accessControl.controller";
import { AccessControlResolver } from "./accessControl.resolver";

@Module({
  imports: [AccessControlModuleBase],
  controllers: [AccessControlController],
  providers: [AccessControlService, AccessControlResolver],
  exports: [AccessControlService],
})
export class AccessControlModule {}
