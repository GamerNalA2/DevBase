import * as graphql from "@nestjs/graphql";
import { CollectionResolverBase } from "./base/collection.resolver.base";
import { Collection } from "./base/Collection";
import { CollectionService } from "./collection.service";

@graphql.Resolver(() => Collection)
export class CollectionResolver extends CollectionResolverBase {
  constructor(protected readonly service: CollectionService) {
    super(service);
  }
}
