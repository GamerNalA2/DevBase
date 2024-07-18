import { EncryptionKeyWhereInput } from "./EncryptionKeyWhereInput";
import { EncryptionKeyOrderByInput } from "./EncryptionKeyOrderByInput";

export type EncryptionKeyFindManyArgs = {
  where?: EncryptionKeyWhereInput;
  orderBy?: Array<EncryptionKeyOrderByInput>;
  skip?: number;
  take?: number;
};
