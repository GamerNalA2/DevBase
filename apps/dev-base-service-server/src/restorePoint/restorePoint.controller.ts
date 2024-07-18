import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RestorePointService } from "./restorePoint.service";
import { RestorePointControllerBase } from "./base/restorePoint.controller.base";

@swagger.ApiTags("restorePoints")
@common.Controller("restorePoints")
export class RestorePointController extends RestorePointControllerBase {
  constructor(protected readonly service: RestorePointService) {
    super(service);
  }
}
