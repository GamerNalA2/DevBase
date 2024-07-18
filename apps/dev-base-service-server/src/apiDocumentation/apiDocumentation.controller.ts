import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiDocumentationService } from "./apiDocumentation.service";
import { ApiDocumentationControllerBase } from "./base/apiDocumentation.controller.base";

@swagger.ApiTags("apiDocumentations")
@common.Controller("apiDocumentations")
export class ApiDocumentationController extends ApiDocumentationControllerBase {
  constructor(protected readonly service: ApiDocumentationService) {
    super(service);
  }
}
