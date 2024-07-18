import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CacheServiceBase } from "./base/cache.service.base";

@Injectable()
export class CacheService extends CacheServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
