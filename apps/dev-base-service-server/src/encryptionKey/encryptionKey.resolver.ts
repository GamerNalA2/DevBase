import * as graphql from "@nestjs/graphql";
import { EncryptionKeyResolverBase } from "./base/encryptionKey.resolver.base";
import { EncryptionKey } from "./base/EncryptionKey";
import { EncryptionKeyService } from "./encryptionKey.service";

@graphql.Resolver(() => EncryptionKey)
export class EncryptionKeyResolver extends EncryptionKeyResolverBase {
  constructor(protected readonly service: EncryptionKeyService) {
    super(service);
  }
}
