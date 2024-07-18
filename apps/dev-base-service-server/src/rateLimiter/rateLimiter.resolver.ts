import * as graphql from "@nestjs/graphql";
import { RateLimiterResolverBase } from "./base/rateLimiter.resolver.base";
import { RateLimiter } from "./base/RateLimiter";
import { RateLimiterService } from "./rateLimiter.service";

@graphql.Resolver(() => RateLimiter)
export class RateLimiterResolver extends RateLimiterResolverBase {
  constructor(protected readonly service: RateLimiterService) {
    super(service);
  }
}
