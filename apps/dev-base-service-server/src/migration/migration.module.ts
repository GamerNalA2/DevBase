import { Module } from "@nestjs/common";
import { MigrationModuleBase } from "./base/migration.module.base";
import { MigrationService } from "./migration.service";
import { MigrationController } from "./migration.controller";
import { MigrationResolver } from "./migration.resolver";

@Module({
  imports: [MigrationModuleBase],
  controllers: [MigrationController],
  providers: [MigrationService, MigrationResolver],
  exports: [MigrationService],
})
export class MigrationModule {}
