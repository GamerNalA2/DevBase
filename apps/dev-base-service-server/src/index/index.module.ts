import { Module } from "@nestjs/common";
import { IndexModuleBase } from "./base/index.module.base";
import { IndexService } from "./index.service";
import { IndexController } from "./index.controller";
import { IndexResolver } from "./index.resolver";

@Module({
  imports: [IndexModuleBase],
  controllers: [IndexController],
  providers: [IndexService, IndexResolver],
  exports: [IndexService],
})
export class IndexModule {}
