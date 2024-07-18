import * as graphql from "@nestjs/graphql";
import { ChangeLogResolverBase } from "./base/changeLog.resolver.base";
import { ChangeLog } from "./base/ChangeLog";
import { ChangeLogService } from "./changeLog.service";

@graphql.Resolver(() => ChangeLog)
export class ChangeLogResolver extends ChangeLogResolverBase {
  constructor(protected readonly service: ChangeLogService) {
    super(service);
  }
}
