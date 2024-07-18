import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BackupScheduleService } from "./backupSchedule.service";
import { BackupScheduleControllerBase } from "./base/backupSchedule.controller.base";

@swagger.ApiTags("backupSchedules")
@common.Controller("backupSchedules")
export class BackupScheduleController extends BackupScheduleControllerBase {
  constructor(protected readonly service: BackupScheduleService) {
    super(service);
  }
}
