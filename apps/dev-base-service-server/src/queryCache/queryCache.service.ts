import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueryCacheServiceBase } from "./base/queryCache.service.base";

@Injectable()
export class QueryCacheService extends QueryCacheServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
