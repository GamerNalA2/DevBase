import * as graphql from "@nestjs/graphql";
import { RestorePointResolverBase } from "./base/restorePoint.resolver.base";
import { RestorePoint } from "./base/RestorePoint";
import { RestorePointService } from "./restorePoint.service";

@graphql.Resolver(() => RestorePoint)
export class RestorePointResolver extends RestorePointResolverBase {
  constructor(protected readonly service: RestorePointService) {
    super(service);
  }
}
