import { Module } from "@nestjs/common";
import { DashboardModuleBase } from "./base/dashboard.module.base";
import { DashboardService } from "./dashboard.service";
import { DashboardController } from "./dashboard.controller";
import { DashboardResolver } from "./dashboard.resolver";

@Module({
  imports: [DashboardModuleBase],
  controllers: [DashboardController],
  providers: [DashboardService, DashboardResolver],
  exports: [DashboardService],
})
export class DashboardModule {}
