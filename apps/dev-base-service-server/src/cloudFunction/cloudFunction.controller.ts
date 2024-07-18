import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CloudFunctionService } from "./cloudFunction.service";
import { CloudFunctionControllerBase } from "./base/cloudFunction.controller.base";

@swagger.ApiTags("cloudFunctions")
@common.Controller("cloudFunctions")
export class CloudFunctionController extends CloudFunctionControllerBase {
  constructor(protected readonly service: CloudFunctionService) {
    super(service);
  }
}
