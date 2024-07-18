import { Module } from "@nestjs/common";
import { CloudFunctionModuleBase } from "./base/cloudFunction.module.base";
import { CloudFunctionService } from "./cloudFunction.service";
import { CloudFunctionController } from "./cloudFunction.controller";
import { CloudFunctionResolver } from "./cloudFunction.resolver";

@Module({
  imports: [CloudFunctionModuleBase],
  controllers: [CloudFunctionController],
  providers: [CloudFunctionService, CloudFunctionResolver],
  exports: [CloudFunctionService],
})
export class CloudFunctionModule {}
