import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RateLimiterServiceBase } from "./base/rateLimiter.service.base";

@Injectable()
export class RateLimiterService extends RateLimiterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
