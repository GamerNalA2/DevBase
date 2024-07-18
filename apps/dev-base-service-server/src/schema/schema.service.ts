import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchemaServiceBase } from "./base/schema.service.base";

@Injectable()
export class SchemaService extends SchemaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
