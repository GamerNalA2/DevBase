import * as graphql from "@nestjs/graphql";
import { MigrationResolverBase } from "./base/migration.resolver.base";
import { Migration } from "./base/Migration";
import { MigrationService } from "./migration.service";

@graphql.Resolver(() => Migration)
export class MigrationResolver extends MigrationResolverBase {
  constructor(protected readonly service: MigrationService) {
    super(service);
  }
}
