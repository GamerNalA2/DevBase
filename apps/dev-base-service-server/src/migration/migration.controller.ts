import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MigrationService } from "./migration.service";
import { MigrationControllerBase } from "./base/migration.controller.base";

@swagger.ApiTags("migrations")
@common.Controller("migrations")
export class MigrationController extends MigrationControllerBase {
  constructor(protected readonly service: MigrationService) {
    super(service);
  }
}
