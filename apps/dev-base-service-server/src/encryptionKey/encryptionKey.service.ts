import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EncryptionKeyServiceBase } from "./base/encryptionKey.service.base";

@Injectable()
export class EncryptionKeyService extends EncryptionKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
