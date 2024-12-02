import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndexService } from "./index.service";
import { IndexControllerBase } from "./base/index.controller.base";

@swagger.ApiTags("indices")
@common.Controller("indices")
export class IndexController extends IndexControllerBase {
  constructor(protected readonly service: IndexService) {
    super(service);
  }
}
