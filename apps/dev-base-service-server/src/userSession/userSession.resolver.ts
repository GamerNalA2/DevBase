import * as graphql from "@nestjs/graphql";
import { UserSessionResolverBase } from "./base/userSession.resolver.base";
import { UserSession } from "./base/UserSession";
import { UserSessionService } from "./userSession.service";

@graphql.Resolver(() => UserSession)
export class UserSessionResolver extends UserSessionResolverBase {
  constructor(protected readonly service: UserSessionService) {
    super(service);
  }
}
