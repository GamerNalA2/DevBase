import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CacheService } from "./cache.service";
import { CacheControllerBase } from "./base/cache.controller.base";

@swagger.ApiTags("caches")
@common.Controller("caches")
export class CacheController extends CacheControllerBase {
  constructor(protected readonly service: CacheService) {
    super(service);
  }
}
