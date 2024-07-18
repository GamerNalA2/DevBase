import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EndpointService } from "./endpoint.service";
import { EndpointControllerBase } from "./base/endpoint.controller.base";

@swagger.ApiTags("endpoints")
@common.Controller("endpoints")
export class EndpointController extends EndpointControllerBase {
  constructor(protected readonly service: EndpointService) {
    super(service);
  }
}
