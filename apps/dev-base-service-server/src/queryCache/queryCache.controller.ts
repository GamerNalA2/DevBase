import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueryCacheService } from "./queryCache.service";
import { QueryCacheControllerBase } from "./base/queryCache.controller.base";

@swagger.ApiTags("queryCaches")
@common.Controller("queryCaches")
export class QueryCacheController extends QueryCacheControllerBase {
  constructor(protected readonly service: QueryCacheService) {
    super(service);
  }
}
