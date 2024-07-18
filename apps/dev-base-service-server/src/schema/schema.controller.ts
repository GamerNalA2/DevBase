import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SchemaService } from "./schema.service";
import { SchemaControllerBase } from "./base/schema.controller.base";

@swagger.ApiTags("schemata")
@common.Controller("schemata")
export class SchemaController extends SchemaControllerBase {
  constructor(protected readonly service: SchemaService) {
    super(service);
  }
}
