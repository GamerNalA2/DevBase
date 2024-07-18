import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EncryptionKeyService } from "./encryptionKey.service";
import { EncryptionKeyControllerBase } from "./base/encryptionKey.controller.base";

@swagger.ApiTags("encryptionKeys")
@common.Controller("encryptionKeys")
export class EncryptionKeyController extends EncryptionKeyControllerBase {
  constructor(protected readonly service: EncryptionKeyService) {
    super(service);
  }
}
