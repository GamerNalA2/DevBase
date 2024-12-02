import * as graphql from "@nestjs/graphql";
import { IndexResolverBase } from "./base/index.resolver.base";
import { Index } from "./base/Index";
import { IndexService } from "./index.service";

@graphql.Resolver(() => Index)
export class IndexResolver extends IndexResolverBase {
  constructor(protected readonly service: IndexService) {
    super(service);
  }
}
