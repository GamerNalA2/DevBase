import * as graphql from "@nestjs/graphql";
import { BackupResolverBase } from "./base/backup.resolver.base";
import { Backup } from "./base/Backup";
import { BackupService } from "./backup.service";

@graphql.Resolver(() => Backup)
export class BackupResolver extends BackupResolverBase {
  constructor(protected readonly service: BackupService) {
    super(service);
  }
}
