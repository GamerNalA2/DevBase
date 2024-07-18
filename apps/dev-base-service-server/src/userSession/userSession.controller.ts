import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSessionService } from "./userSession.service";
import { UserSessionControllerBase } from "./base/userSession.controller.base";

@swagger.ApiTags("userSessions")
@common.Controller("userSessions")
export class UserSessionController extends UserSessionControllerBase {
  constructor(protected readonly service: UserSessionService) {
    super(service);
  }
}
