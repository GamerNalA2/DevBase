import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CloudFunctionServiceBase } from "./base/cloudFunction.service.base";

@Injectable()
export class CloudFunctionService extends CloudFunctionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
