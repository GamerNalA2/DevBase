import { Module } from "@nestjs/common";
import { RateLimiterModuleBase } from "./base/rateLimiter.module.base";
import { RateLimiterService } from "./rateLimiter.service";
import { RateLimiterController } from "./rateLimiter.controller";
import { RateLimiterResolver } from "./rateLimiter.resolver";

@Module({
  imports: [RateLimiterModuleBase],
  controllers: [RateLimiterController],
  providers: [RateLimiterService, RateLimiterResolver],
  exports: [RateLimiterService],
})
export class RateLimiterModule {}
