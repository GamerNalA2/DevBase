import * as graphql from "@nestjs/graphql";
import { CacheResolverBase } from "./base/cache.resolver.base";
import { Cache } from "./base/Cache";
import { CacheService } from "./cache.service";

@graphql.Resolver(() => Cache)
export class CacheResolver extends CacheResolverBase {
  constructor(protected readonly service: CacheService) {
    super(service);
  }
}
