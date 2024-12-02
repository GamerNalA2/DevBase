import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IndexServiceBase } from "./base/index.service.base";

@Injectable()
export class IndexService extends IndexServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
