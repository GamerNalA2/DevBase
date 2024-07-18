import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BackupService } from "./backup.service";
import { BackupControllerBase } from "./base/backup.controller.base";

@swagger.ApiTags("backups")
@common.Controller("backups")
export class BackupController extends BackupControllerBase {
  constructor(protected readonly service: BackupService) {
    super(service);
  }
}
