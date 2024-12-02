import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccessControlService } from "./accessControl.service";
import { AccessControlControllerBase } from "./base/accessControl.controller.base";

@swagger.ApiTags("accessControls")
@common.Controller("accessControls")
export class AccessControlController extends AccessControlControllerBase {
  constructor(protected readonly service: AccessControlService) {
    super(service);
  }
}
