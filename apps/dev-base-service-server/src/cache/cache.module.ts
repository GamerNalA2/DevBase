import { Module } from "@nestjs/common";
import { CacheModuleBase } from "./base/cache.module.base";
import { CacheService } from "./cache.service";
import { CacheController } from "./cache.controller";
import { CacheResolver } from "./cache.resolver";

@Module({
  imports: [CacheModuleBase],
  controllers: [CacheController],
  providers: [CacheService, CacheResolver],
  exports: [CacheService],
})
export class CacheModule {}
