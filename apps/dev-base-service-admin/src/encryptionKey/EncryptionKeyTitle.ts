import { EncryptionKey as TEncryptionKey } from "../api/encryptionKey/EncryptionKey";

export const ENCRYPTIONKEY_TITLE_FIELD = "purpose";

export const EncryptionKeyTitle = (record: TEncryptionKey): string => {
  return record.purpose?.toString() || String(record.id);
};
