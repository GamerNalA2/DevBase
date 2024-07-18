import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollectionService } from "./collection.service";
import { CollectionControllerBase } from "./base/collection.controller.base";

@swagger.ApiTags("collections")
@common.Controller("collections")
export class CollectionController extends CollectionControllerBase {
  constructor(protected readonly service: CollectionService) {
    super(service);
  }
}
