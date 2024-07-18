import * as graphql from "@nestjs/graphql";
import { SchemaResolverBase } from "./base/schema.resolver.base";
import { Schema } from "./base/Schema";
import { SchemaService } from "./schema.service";

@graphql.Resolver(() => Schema)
export class SchemaResolver extends SchemaResolverBase {
  constructor(protected readonly service: SchemaService) {
    super(service);
  }
}
