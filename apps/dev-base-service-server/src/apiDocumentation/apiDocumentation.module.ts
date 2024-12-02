import { Module } from "@nestjs/common";
import { ApiDocumentationModuleBase } from "./base/apiDocumentation.module.base";
import { ApiDocumentationService } from "./apiDocumentation.service";
import { ApiDocumentationController } from "./apiDocumentation.controller";
import { ApiDocumentationResolver } from "./apiDocumentation.resolver";

@Module({
  imports: [ApiDocumentationModuleBase],
  controllers: [ApiDocumentationController],
  providers: [ApiDocumentationService, ApiDocumentationResolver],
  exports: [ApiDocumentationService],
})
export class ApiDocumentationModule {}
