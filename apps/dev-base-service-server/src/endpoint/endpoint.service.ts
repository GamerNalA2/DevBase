import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EndpointServiceBase } from "./base/endpoint.service.base";

@Injectable()
export class EndpointService extends EndpointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
