import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiDocumentationServiceBase } from "./base/apiDocumentation.service.base";

@Injectable()
export class ApiDocumentationService extends ApiDocumentationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
