import * as graphql from "@nestjs/graphql";
import { DashboardResolverBase } from "./base/dashboard.resolver.base";
import { Dashboard } from "./base/Dashboard";
import { DashboardService } from "./dashboard.service";

@graphql.Resolver(() => Dashboard)
export class DashboardResolver extends DashboardResolverBase {
  constructor(protected readonly service: DashboardService) {
    super(service);
  }
}
