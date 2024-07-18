import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RateLimiterService } from "./rateLimiter.service";
import { RateLimiterControllerBase } from "./base/rateLimiter.controller.base";

@swagger.ApiTags("rateLimiters")
@common.Controller("rateLimiters")
export class RateLimiterController extends RateLimiterControllerBase {
  constructor(protected readonly service: RateLimiterService) {
    super(service);
  }
}
