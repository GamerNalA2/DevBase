import * as graphql from "@nestjs/graphql";
import { QueryCacheResolverBase } from "./base/queryCache.resolver.base";
import { QueryCache } from "./base/QueryCache";
import { QueryCacheService } from "./queryCache.service";

@graphql.Resolver(() => QueryCache)
export class QueryCacheResolver extends QueryCacheResolverBase {
  constructor(protected readonly service: QueryCacheService) {
    super(service);
  }
}
