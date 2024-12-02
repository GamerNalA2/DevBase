import { Module } from "@nestjs/common";
import { EndpointModuleBase } from "./base/endpoint.module.base";
import { EndpointService } from "./endpoint.service";
import { EndpointController } from "./endpoint.controller";
import { EndpointResolver } from "./endpoint.resolver";

@Module({
  imports: [EndpointModuleBase],
  controllers: [EndpointController],
  providers: [EndpointService, EndpointResolver],
  exports: [EndpointService],
})
export class EndpointModule {}
