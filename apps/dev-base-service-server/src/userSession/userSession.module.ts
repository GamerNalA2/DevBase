import { Module } from "@nestjs/common";
import { UserSessionModuleBase } from "./base/userSession.module.base";
import { UserSessionService } from "./userSession.service";
import { UserSessionController } from "./userSession.controller";
import { UserSessionResolver } from "./userSession.resolver";

@Module({
  imports: [UserSessionModuleBase],
  controllers: [UserSessionController],
  providers: [UserSessionService, UserSessionResolver],
  exports: [UserSessionService],
})
export class UserSessionModule {}
