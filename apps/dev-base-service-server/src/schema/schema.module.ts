import { Module } from "@nestjs/common";
import { SchemaModuleBase } from "./base/schema.module.base";
import { SchemaService } from "./schema.service";
import { SchemaController } from "./schema.controller";
import { SchemaResolver } from "./schema.resolver";

@Module({
  imports: [SchemaModuleBase],
  controllers: [SchemaController],
  providers: [SchemaService, SchemaResolver],
  exports: [SchemaService],
})
export class SchemaModule {}
