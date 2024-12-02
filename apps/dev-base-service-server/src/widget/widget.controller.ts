import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WidgetService } from "./widget.service";
import { WidgetControllerBase } from "./base/widget.controller.base";

@swagger.ApiTags("widgets")
@common.Controller("widgets")
export class WidgetController extends WidgetControllerBase {
  constructor(protected readonly service: WidgetService) {
    super(service);
  }
}
