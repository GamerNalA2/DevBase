import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChangeLogService } from "./changeLog.service";
import { ChangeLogControllerBase } from "./base/changeLog.controller.base";

@swagger.ApiTags("changeLogs")
@common.Controller("changeLogs")
export class ChangeLogController extends ChangeLogControllerBase {
  constructor(protected readonly service: ChangeLogService) {
    super(service);
  }
}
