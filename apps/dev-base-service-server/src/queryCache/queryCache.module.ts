import { Module } from "@nestjs/common";
import { QueryCacheModuleBase } from "./base/queryCache.module.base";
import { QueryCacheService } from "./queryCache.service";
import { QueryCacheController } from "./queryCache.controller";
import { QueryCacheResolver } from "./queryCache.resolver";

@Module({
  imports: [QueryCacheModuleBase],
  controllers: [QueryCacheController],
  providers: [QueryCacheService, QueryCacheResolver],
  exports: [QueryCacheService],
})
export class QueryCacheModule {}
