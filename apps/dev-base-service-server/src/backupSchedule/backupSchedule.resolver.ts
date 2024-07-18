import * as graphql from "@nestjs/graphql";
import { BackupScheduleResolverBase } from "./base/backupSchedule.resolver.base";
import { BackupSchedule } from "./base/BackupSchedule";
import { BackupScheduleService } from "./backupSchedule.service";

@graphql.Resolver(() => BackupSchedule)
export class BackupScheduleResolver extends BackupScheduleResolverBase {
  constructor(protected readonly service: BackupScheduleService) {
    super(service);
  }
}
