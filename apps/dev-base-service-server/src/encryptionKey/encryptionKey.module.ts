import { Module } from "@nestjs/common";
import { EncryptionKeyModuleBase } from "./base/encryptionKey.module.base";
import { EncryptionKeyService } from "./encryptionKey.service";
import { EncryptionKeyController } from "./encryptionKey.controller";
import { EncryptionKeyResolver } from "./encryptionKey.resolver";

@Module({
  imports: [EncryptionKeyModuleBase],
  controllers: [EncryptionKeyController],
  providers: [EncryptionKeyService, EncryptionKeyResolver],
  exports: [EncryptionKeyService],
})
export class EncryptionKeyModule {}
