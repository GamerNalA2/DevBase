import * as graphql from "@nestjs/graphql";
import { AccessControlResolverBase } from "./base/accessControl.resolver.base";
import { AccessControl } from "./base/AccessControl";
import { AccessControlService } from "./accessControl.service";

@graphql.Resolver(() => AccessControl)
export class AccessControlResolver extends AccessControlResolverBase {
  constructor(protected readonly service: AccessControlService) {
    super(service);
  }
}
